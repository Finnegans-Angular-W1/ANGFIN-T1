import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';
import { RegistroComponent } from './pages/auth-registro/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { PermissionsGuard } from './core/guards/permissions.guard';

import { PasswordResetComponent } from './pages/usuarios/password-reset/password-reset.component';

import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
import { InvestementsComponent } from './components/investements/investements.component';
import { HomeComponent } from './pages/home/home.component';
import { ListIngEgrComponent } from './components/list-ing-egr/list-ing-egr.component';
import { ListEgresosComponent } from './components/list-egresos/list-egresos.component';
import { ListIngresosComponent } from './components/list-ingresos/list-ingresos.component';



const routes: Routes = [ 
  {
    path:'auth-login',
    component:LoginComponent
  },
  {
    path: 'home',
    loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'auth-registro',
    component:RegistroComponent
  },
  {
    path:'listmov',
    component:ListIngEgrComponent
  },
  {
    path:'liste',
    component:ListEgresosComponent
  },
  {
    path:'listi',
    component:ListIngresosComponent
  },


  { 
    path: '', 
    redirectTo: 'auth-login', 
    pathMatch: 'full' 
  },
  {
    path:'password-reset',
    component: PasswordResetComponent },
   { path : 'inversiones',
    component : InvestementsComponent
  },
  {
    path:'shar',
    //canActivate: [PermissionsGuard],
    loadChildren:()=> import('./shared/shared.module').then( m=> m.SharedModule)
  },
  {
    path:'user-profile',
    canActivate: [PermissionsGuard],
    component:UserProfileComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
