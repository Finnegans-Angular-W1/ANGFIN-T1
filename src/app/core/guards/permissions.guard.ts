import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectIsAuthenticated } from '../state/selector/Auth.selector';

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivate {
  isAuth!: boolean;
  constructor(private store: Store<AppState>, private router: Router) {
    store.select(selectIsAuthenticated).subscribe(res => (this.isAuth = res));
  }

  canActivate(): Observable<boolean> | boolean {
    if (!this.isAuth) this.router.navigate(['login']);

    return this.isAuth;
  }
}
