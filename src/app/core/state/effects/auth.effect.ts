import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as loginActions from '../actions/login.actions';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ToastService } from 'angular-toastify';
import { LoginResult } from '../../models/auth';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { getData } from '../actions/data.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private toast: ToastService,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginActions.login),
      exhaustMap(action => {
        return this.auth.logIn(action).pipe(
          map(({ accessToken }: LoginResult) => {
            this.auth.saveToken(accessToken);
            this.router.navigate(['home']);
            return loginActions.loginSuccess({ accessToken });
          }),
          catchError(({ message }: Error) => {
            this.toast.error(message);
            return of(loginActions.loginFailure({ error: message }));
          })
        );
      })
    );
  });

  logOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginActions.logout),
        tap(() => {
          this.auth.logOut();
          this.router.navigate(['/login']);
        })
      );
    },
    { dispatch: false }
  );

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginActions.loginSuccess),
      exhaustMap(action => {
        return this.auth.getUserLogged().pipe(
          map((res: User) => {
            return loginActions.setLoggedUser(res);
          }),
          catchError((e: any) => {
            this.toast.error('Ha ocurrido un error al iniciar sesion');
            return of(
              loginActions.loginFailure({ error: 'Ha ocurrido un error' })
            );
          })
        );
      })
    );
  });


  setLoggedUser$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(loginActions.setLoggedUser),
      map(action =>{
        return getData()
      })
    )
  })

  loginFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginActions.loginFailure),
        tap(() => {
          this.auth.logOut();
          this.router.navigate(['/login']);
        })
      );
    },
    { dispatch: false }
  );
}
