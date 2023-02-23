import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { slideInAnimation } from './animations';
import { AuthState } from './core/models/auth';
import { AuthService } from './core/services/auth.service';
import { loginSuccess } from './core/state/actions/login.actions';
import { AppState } from './core/state/app.state';
import { selectIsLoading } from './core/state/selector/Auth.selector';
import { getLoading } from './core/state/selector/spinner.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  title = 'e-wallet';

  isLoading: boolean | null = false;

  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    private contexts: ChildrenOutletContexts,
    private router: Router
  ) {
    const token = this.auth.getToken();
    if (token) {
      store.dispatch(
        loginSuccess({
          accessToken: this.auth.getToken(),
        })
      );
    }
  }

  ngOnInit(): void {
    this.store.select(getLoading).subscribe(res => {
      this.isLoading = res;
    });

    this.router.events.subscribe((evt: any) => {
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        const scrollingElement = document.scrollingElement || document.body;
        scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Animaciones de transición entre páginas
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
