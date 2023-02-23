import { createSelector } from "@ngrx/store";
import { stat } from "fs/promises";
import { AppState } from "../app.state";
import { DataState } from "../reducer/data.reducer";

export const selectData = (state:AppState)=>state.data


export const selectDataImportant = createSelector(
  selectData,
  (state: DataState) => ({
    account_id: state.account.id,
    money: state.account.money,
    transactions: state.transacciones.data,
    user_id: state.account.userId
  })
);