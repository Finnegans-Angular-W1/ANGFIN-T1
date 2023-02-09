import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../models/auth";
import { authReducer } from "./reducer/login.reducers";
import { Spinner } from '../models/spinner';
import { spinnerReducer } from './reducer/spinner.reducer';

export interface AppState{
    auth:AuthState,
    isLoading : Spinner
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    auth:authReducer,
    isLoading : spinnerReducer
}