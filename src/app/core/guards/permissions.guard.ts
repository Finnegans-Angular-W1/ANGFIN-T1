import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SharedRoutingModule } from 'src/app/shared/shared-routing.module';
import { AuthService } from '../models/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  isAuthenticated$: Observable<boolean>;
  constructor(private userService: AuthService, private router:Router) {
    this.isAuthenticated$ = this.userService.isAuthenticated$();
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAuthenticated$.pipe(map(isAuth => {
        if (isAuth) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      }));
  }

}
