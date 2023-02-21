import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { catchError, EMPTY, tap, map, exhaustMap } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      termsOfUse: [false, Validators.requiredTrue],
    });
  }

  onRegister() {
    // this.toast.info('mensaje')
    this.auth
      .register(this.registerForm.value)
      .subscribe({
        next: (res)=>{this.toast.success('El usuario ha sido creado exitosamente')},
        error: e=>{
          this.toast.error(e.message)
        }
      })
  }

  showTerms() {
    // TODO
    alert('Terminos y condiciones');
  }
}
