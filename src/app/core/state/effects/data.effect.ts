import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as dataActions from '../actions/data.action';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { ToastService } from 'angular-toastify';
import { TransactionsService } from '../../services/transactions.service';
import { AccountsService } from '../../services/accounts.service';

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private transaction: TransactionsService,
    private account: AccountsService,
    private toast: ToastService
  ) {}

  getData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(dataActions.getData),
      exhaustMap(() => {
        return this.transaction.getTransactions().pipe(
          map(res => {
            return dataActions.setTransactions(res);
          }),
          catchError(({ message }: Error) => {
            this.toast.error('Ha ocurrido un error al obtener los datos');
            return EMPTY;
          })
        );
      }),
    );
  });

  getDatax2$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(dataActions.setTransactions),
      exhaustMap(() => {
        return this.account.getAcconts().pipe(
          map(res => {
            return dataActions.setAccounts({account:res});
          }),
          catchError(({ message }: Error) => {
            this.toast.error('Ha ocurrido un error al obtener los datos');
            return EMPTY;
          })
        );
      })
    );
  });
}
