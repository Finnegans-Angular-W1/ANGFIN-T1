import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../../models/auth";

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