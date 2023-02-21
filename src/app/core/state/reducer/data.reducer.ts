import { createReducer, on } from '@ngrx/store';
import { Account } from '../../models/account';
import { TransactionResponse } from '../../models/transactions';
import { getData, setAccounts, setTransactions } from '../actions/data.action';


export interface DataState{
  account: Account,
  transacciones: TransactionResponse
}

const initialState:DataState = {
  account:{
    id:0,
    creationDate: "",
    money: "",
    isBlocked: false,
    userId: 0
  },
  transacciones:{
    data:[],
    nextPage:"",
    previousPage:""
  }
}

export const dataReducer = createReducer(
  initialState,
  on(getData, state => ({
    ...state,
  })),
  on(setTransactions, (state, payload) =>({
    ...state,
    transacciones: payload
  })),
  on(setAccounts, (state, payload)=>({
    ...state,
    account: payload.account[0]
  }))
)