import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Store } from '@ngrx/store';
import { slideInAnimation } from './animations';
import { AuthState } from './core/models/auth';
import { AuthService } from './core/services/auth.service';
import { loginSuccess } from './core/state/actions/login.actions';
import { AppState } from './core/state/app.state';
import { selectIsLoading } from './core/state/selector/Auth.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit{
  title = 'e-wallet';

  isLoading:boolean|null = false

  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
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

  ngOnInit(): void {
    this.store.select(selectIsLoading).subscribe(res=>{
      this.isLoading = res
    })
  }

  // Animaciones de transición entre páginas
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  
}
