import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../models/auth";
import { authReducer } from "./reducer/login.reducers";

export interface AppState{
    auth:AuthState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    auth:authReducer
}