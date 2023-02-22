import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { loginSuccess } from 'src/app/core/state/actions/login.actions';
import { AppState } from 'src/app/core/state/app.state';
interface usuarioToken {
  token: string;
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() handleSubmit = new EventEmitter();
  isCheck: any;
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.handleSubmit.emit(this.loginForm.value);
    // this.loginForm.reset();
  }

  onclick() {
    this.authService
      .loginGoogle()
      .then(res => {
        console.log(
          'Mi res: ',
          res.user.getIdTokenResult().then(res2 => {
            // console.log('Respuesta2. ', res2.token);
            this.authService.saveToken(res2.token);
            this.store.dispatch(loginSuccess({ accessToken: res2.token }));
            this.router.navigate(['/home']);
          }).then
        );
      })
      .catch(error => console.log(error));
  }
}
