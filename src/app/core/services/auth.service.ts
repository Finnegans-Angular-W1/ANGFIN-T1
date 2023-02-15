import { Injectable } from '@angular/core';
import { LoginInput, LoginResult } from '../models/auth';
import { HttpService } from './http.service';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  GoogleAuthProvider,
  Auth,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private htpp: HttpService,
    public afAuth: AngularFireAuth,
    private auth: Auth
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
  logoutGoogle() {
    sessionStorage.removeItem('accessToken');
    return signOut(this.auth);
  }

  logIn(loginInput: LoginInput): Observable<LoginResult> {
    return this.htpp.post<LoginResult>(`/auth/login`, loginInput).pipe(
      map((res: LoginResult) => {
        return res;
      }),
      catchError(err => {
        return this.handleLoginError(err);
      })
    );
  }

  private handleLoginError(err: HttpErrorResponse): Observable<never> {
    if (err.status == 401) {
      return throwError(() => new Error('Usuario o contraseña incorrecta'));
    }
    return throwError(() => new Error('Ha ocurrido un error'));
  }

  loginGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  /*GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
 }*/

  /*AuthLogin(provider: any) {
  return this.afAuth
    .signInWithPopup(provider)
    .then((result) => {
      console.log('Usuario logueado exitosamente con Google');
    })
    .catch((error) => {
      console.log(error);
    });
}*/
}
