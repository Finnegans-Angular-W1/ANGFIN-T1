import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, LoginInput } from 'src/app/core/models/auth';
import { login } from 'src/app/core/state/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store<AuthState>) {}

  handleSubmit(data: LoginInput) {
    this.store.dispatch(login(data))
  }
}
