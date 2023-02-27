import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { DialogGenericoComponent } from 'src/app/shared/components/dialog/components/dialos.generic';

// Clase para mostrar el error de validación en el form
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    const invalidCtrl = control?.touched || control?.parent?.dirty;
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);
    return control?.parent?.errors && control.parent.errors['notSame'] && control.touched && ( invalidCtrl || invalidParent );
  }
}

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})

export class PasswordResetComponent implements OnDestroy {
  
  passwordResetForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  httpSubscription: Subscription = new Subscription;
  userId!: number;

  constructor(
    private http: UsersService,
    private dialog: MatDialog,
    private router:Router
  ) {
    
    // Reactive form
    this.passwordResetForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$')
      ]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
    {
      validators: this.checkPasswords
    });
  }

  // ngOnInit(): void {
  //   // Pendiente traer el email y el userId del store (cuando sea implementado el login) o localstorage para setearlo por default en el form y para los params
  // }

  // al hacer click en "guardar cambios"
  onSubmit():void {
    // toma el valor ingresado en el form
    let newPassword = this.passwordResetForm.get('password')?.value;

    // llamada a la api
    this.httpSubscription = this.http.resetPassword(this.userId, {
      "password": newPassword
    }).subscribe({
      next: () => {
        this.dialog.open(DialogGenericoComponent, {
          data: {
            title: '¡Listo!',
            data: 'La contraseña ha sido cambiada exitosamente'
          }
        });
      },
      error: (err) => {
        this.dialog.open(DialogGenericoComponent, {
          data: {
            title: 'Error',
            data: `Error status ${err.error.status}: ${err.error.error}`
          }
        });
      }
    });
  }

  // Validator que chequea si las 2 contraseñas coinciden
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value
    return password === confirmPassword ? null : { notSame: true }
  }

  ngOnDestroy():void {
    this.httpSubscription.unsubscribe();
  }

  backUser(){
    const confirmation = confirm('Seguro que quieres regresar? Perderas todos los datos que hayas guardado');
    if(confirmation){
      this.router.navigate(['profile'])
    };
  };

}
