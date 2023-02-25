import { createReducer, on } from "@ngrx/store";

import { AuthState} from "src/app/core/models/auth";

import { login, loginFailure, loginSuccess, logout, setLoggedUser } from "../actions/login.actions";



export const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    accessToken: null,
    error:null,

};

export const authReducer = createReducer(
  initialState,
  on(login, state => ({
    ...state,
    isLoading: true,
  })),
  on(loginSuccess, (state, action) => ({
    ...state,
    accessToken: action.accessToken,
    isAuthenticated: true,
    error: null,
  })),
  on(loginFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
    accessToken: null,
    user: null,
    isAuthenticated: false,
  })),
  on(logout, (state, action) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    isLoading: false,
    accessToken: null,
    error: null,
  })),
  on(setLoggedUser, (state, payload) => ({
    ...state,
    isLoading:false,
    user: {
      email: payload.email,
      first_name: payload.first_name,
      last_name: payload.last_name,
      password: '******',
      points: payload.points,
      roleId: payload.roleId,
    },
  }))
);
