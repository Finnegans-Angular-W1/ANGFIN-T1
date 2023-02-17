import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { LoginInput, LoginResult } from '../../models/auth';


export const login = createAction(
    '[Auth] Login',
    props<LoginInput>()
);

export const logout = createAction(
    '[Auth] Logout'
); 

export const loginSuccess= createAction(
    '[Auth] Login Success',
    props<LoginResult>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{error:string}>()
)

export const setLoggedUser = createAction(
    '[Auth] Set logged user',
    props<User>()
);