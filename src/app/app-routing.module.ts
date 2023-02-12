import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';
import { RegistroComponent } from './pages/auth-registro/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { PermissionsGuard } from './core/guards/permissions.guard';
import { PasswordResetComponent } from './pages/usuarios/password-reset/password-reset.component';
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
import { InvestementsComponent } from './components/investements/investements.component';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth-login/auth-login.module').then(
        m => m.AuthLoginModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/auth-registro/auth-registro.module').then(
        m => m.AuthRegistroModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [PermissionsGuard],
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent,
  },
  {
    path: 'inversiones',
    component: InvestementsComponent,
  },
  {
    path: 'shar',
    //canActivate: [PermissionsGuard],
    loadChildren: () =>
      import('./shared/shared.module').then(m => m.SharedModule),
  },
  {
    path: 'user-profile',
    canActivate: [PermissionsGuard],
    component: UserProfileComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
