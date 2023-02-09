import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../models/auth";
import { authReducer } from "./reducer/login.reducers";
import { alertReducer } from "./reducer/alert.reducer";
import { AlertState } from "../models/types";

export interface AppState{
    auth:AuthState,
    alert: AlertState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    auth:authReducer,
    alert: alertReducer
}