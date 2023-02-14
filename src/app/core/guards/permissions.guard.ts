import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivate {
  token: string | null = null;

  constructor(private auth: AuthService, private router: Router) {
    this.token = this.auth.getToken();
  }

  canActivate(): Observable<boolean> | boolean {
    if (this.token) return true;
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
