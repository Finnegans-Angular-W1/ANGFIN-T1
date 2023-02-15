import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './core/models/auth';
import { AuthService } from './core/services/auth.service';
import { loginSuccess } from './core/state/actions/login.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-wallet';

  constructor(private auth: AuthService, private store: Store<AuthState>) {
    const token = this.auth.getToken()
    if (token) {
      store.dispatch(
        loginSuccess({
          accessToken: this.auth.getToken(),
        })
      );
    }
  }

  
}
