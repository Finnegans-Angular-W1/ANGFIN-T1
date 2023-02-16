import { User } from "./user";

export interface AuthState {
    user: User |null;
    isAuthenticated: boolean;
    isLoading: boolean | null;
    accessToken: string | null;
    error:string | null;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface LoginResult {
    accessToken: string | null;
}

export interface RegisterInput {
    first_name?: string;
    last_name?: string;
    email: string;
    password: string;
}