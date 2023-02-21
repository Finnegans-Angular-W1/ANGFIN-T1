import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Store } from '@ngrx/store';
import { slideInAnimation } from './animations';
import { AuthState } from './core/models/auth';
import { AuthService } from './core/services/auth.service';
import { loginSuccess } from './core/state/actions/login.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'e-wallet';

  constructor(
    private auth: AuthService,
    private store: Store<AuthState>,
    private contexts: ChildrenOutletContexts
    ) {
    const token = this.auth.getToken()
    if (token) {
      store.dispatch(
        loginSuccess({
          accessToken: this.auth.getToken(),
        })
      );
    }
  }

  // Animaciones de transición entre páginas
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  
}
