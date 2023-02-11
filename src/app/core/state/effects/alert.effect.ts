import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastService } from 'angular-toastify';
import { tap } from 'rxjs';

import * as alertActions from '../actions/alert.actions';

@Injectable()
export class AlertEffects {
  constructor(private actions$: Actions, private alert: ToastService) {}

  succsessAlert$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(alertActions.successAlert),
        tap(({ message }) => {
          this.alert.success(message);
        })
      );
    },
    { dispatch: false }
  );

  errorAlert$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(alertActions.errorAlert),
        tap(({ message }) => {
          this.alert.error(message);
        })
      );
    },
    { dispatch: false }
  );

  warningAlert$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(alertActions.warningAlert),
        tap(({ message }) => {
          this.alert.warn(message);
        })
      );
    },
    { dispatch: false }
  );
}
