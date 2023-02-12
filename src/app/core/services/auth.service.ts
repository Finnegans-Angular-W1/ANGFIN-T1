import { Injectable } from '@angular/core';
import { LoginInput, LoginResult } from '../models/auth';
import { HttpService } from './http.service';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';




@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private htpp: HttpService,
  ) {}

  saveToken(token: string) {
    sessionStorage.setItem('accessToken', token);
  }

  getToken() {
    return sessionStorage.getItem('accessToken');
  }

  logOut() {
    localStorage.removeItem('accessToken');
  }

  logIn(loginInput: LoginInput): Observable<LoginResult> {
    return this.htpp
      .post<LoginResult>(`/auth/login`, loginInput)
      .pipe(
        map((res: LoginResult) => {
          return res;
        }),
        catchError(err => {
         return this.handleLoginError(err)       
        })
      );
  }

  private handleLoginError(err: HttpErrorResponse): Observable<never> {
    if (err.status == 401) {
      return throwError(() => new Error('Usuario o contraseña incorrecta'));
    }
    return throwError(() => new Error('Ha ocurrido un error'));
  }
}
