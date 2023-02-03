import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";

import { AuthState} from "src/app/core/models/auth";

import { login, loginFailure, loginSuccess, logout, register } from "../actions/login.actions";



export const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    accessToken: null,
    error:null,

};

export const authReducer = createReducer(
    initialState,
    on(login,(state) =>({
        ...state,
        isLoading: true,
    })),
    on(loginSuccess,(state,action) =>({
        ...state,
        accessToken: action.accessToken,
    })),
    on(loginFailure,(state,action)=>({
        ...state,
        error: action.error,
    })),
    on(register,(state,action)=>({
        ...state,
        first_name:action.first_name,
        last_name:action.last_name,
        email:action.email,
        password:action.password,
    })),
    on(logout,(state,action)=>({
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        accessToken: null,
        error:null,
    }))
)
