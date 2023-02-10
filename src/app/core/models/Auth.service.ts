import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import { AuthSelector } from '../state/selector/Auth.selector';
import { AuthState } from './auth';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<{ state: AuthState }>,
    private http: HttpService
  ) { }

  public isAuthenticated$():Observable<boolean>{
    return this.store.select(AuthSelector.isAuthenticated)
  }

  public hasToken$():Observable<any>{
    return this.store.select(AuthSelector.hasToken)
  }

  public getUser$():Observable<User | null>{
    return this.store.select(AuthSelector.getUser)
  }

  public getState$():Observable<AuthState>{
    return this.store.select(AuthSelector.getState)
  }

  login(body:any) {
    return this.http.post('/auth/login', body);
  }
}
