import { createAction, props } from "@ngrx/store";
import { Account } from "../../models/account";
import { TransactionResponse } from "../../models/transactions";

export const getData = createAction(
  '[get data]'
)

export const setTransactions = createAction(
  '[set transactions]',
  props<TransactionResponse>()
);

export const setAccounts = createAction(
  '[set Accounts]',
  props<{account:Account[]}>()
);