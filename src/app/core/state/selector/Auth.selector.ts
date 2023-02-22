import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../../models/auth";
import { AppState } from "../app.state";

export class AuthSelector{
    public static readonly stateKey='auth';

    public static readonly getState = createFeatureSelector<AuthState>(
        AuthSelector.stateKey
    );

public static readonly isAuthenticated= createSelector(
    AuthSelector.getState,
    (state:AuthState) => state.isAuthenticated
);

public static readonly hasToken= createSelector(
    AuthSelector.getState,
    (state:AuthState)=> state.accessToken
);

public static readonly getUser=createSelector(
    AuthSelector.getState,
    (state:AuthState)=> state.user
);
}


export const selectAuth = (state:AppState) => state.auth

export const selectIsAuthenticated = createSelector(
    selectAuth,
    (state:AuthState) => state.isAuthenticated
)

export const selectIsLoading = createSelector(
  selectAuth,
  (state: AuthState) => state.isLoading
);

export const selectUser = createSelector(
  selectAuth,
  (state: AuthState) => state.user
);