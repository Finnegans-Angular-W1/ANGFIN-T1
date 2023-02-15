import { Injectable } from '@angular/core';
import { LoginInput, LoginResult } from '../models/auth';
import { HttpService } from './http.service';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private htpp: HttpService,
    private router: Router

  ) {}

  saveToken(token: string|null) {
    if (token) sessionStorage.setItem('accessToken', token);
  }

  getToken() {    
    return sessionStorage.getItem('accessToken')
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  logIn(loginInput: LoginInput): Observable<LoginResult> {
    return this.htpp
      .post<LoginResult>(`/auth/login`, loginInput)
      .pipe(
        map((res: LoginResult) => {
          this.router.navigate(['home']);
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
