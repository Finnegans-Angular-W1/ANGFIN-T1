import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelector } from '../state/selector/Auth.selector';
import { AuthState } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<{ state: AuthState }>
  ) { }

  public isAuthenticated$():Observable<boolean>{
    return this.store.select(AuthSelector.isAuthenticated)
  }
}
