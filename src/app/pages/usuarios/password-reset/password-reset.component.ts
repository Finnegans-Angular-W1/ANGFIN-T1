import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
export class PasswordResetComponent implements OnInit {
  
  passwordResetForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor() {
    
    // Reactive form
    this.passwordResetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$')]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: this.checkPasswords });
  
}

  ngOnInit(): void {
    // Pendiente traer el email del store (cuando sea implementado el login) o localstorage para setearlo por default en el form
  }

  onSubmit() {
    // Pendientes endpoints PATCH aun no implementados en el http.service
  }

  // Validator que chequea si las 2 contraseñas coinciden
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value
    return password === confirmPassword ? null : { notSame: true }
  }

}
