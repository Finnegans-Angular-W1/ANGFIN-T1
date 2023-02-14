import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  token: string | null = null;
  constructor(private auth: AuthService, private router: Router) {
    this.token = this.auth.getToken();
  }
  canActivate(): Observable<boolean> | boolean {

    if(this.token){
      this.router.navigate(['home']);
      return false
    }else{
      return true;
    }
  }
}
