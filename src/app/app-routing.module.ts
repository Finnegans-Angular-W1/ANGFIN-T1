import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { PermissionsGuard } from './core/guards/permissions.guard';
import { PasswordResetComponent } from './pages/usuarios/password-reset/password-reset.component';
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
import { InvestementsComponent } from './components/investements/investements.component';
import { LoginGuard } from './core/guards/login.guard';
import { ListIngEgrComponent } from './components/list-ing-egr/list-ing-egr.component';
import { ListEgresosComponent } from './components/list-egresos/list-egresos.component';
import { ListIngresosComponent } from './components/list-ingresos/list-ingresos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth-login/auth-login.module').then(
        m => m.AuthLoginModule
      ),
    canActivate: [LoginGuard],
    data: { animation: 'LoginPage' }
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/auth-registro/auth-registro.module').then(
        m => m.AuthRegistroModule
      ),
    canActivate: [LoginGuard],
    data: { animation: 'RegisterPage' }
  },
  {
    path: 'home',
    loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule),
    data: { animation: 'HomePage' }
  },
  {
    path:'listmov',
    component:ListIngEgrComponent,
    data: { animation: 'MovimientosPage' }
  },
  {
    path:'liste',
    component:ListEgresosComponent,
    data: { animation: 'EgresosPage' }
  },
  {
    path:'listi',
    component:ListIngresosComponent,
    data: { animation: 'IngresosPage' }
  },
  {
    path:'password-reset',
    component: PasswordResetComponent,
    data: { animation: 'PasswordPage' }
  },
  {
    path:'shar',
    //canActivate: [PermissionsGuard],
    loadChildren:()=> import('./shared/shared.module').then( m=> m.SharedModule)
  },
  {
    path: 'inversiones',
    component: InvestementsComponent,
    data: { animation: 'InversionesPage' }
  },
  {
    path: 'user-profile',
    // canActivate: [PermissionsGuard],
    component: UserProfileComponent,
    data: { animation: 'PerfilPage' }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { animation: 'NotFoundPage' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
