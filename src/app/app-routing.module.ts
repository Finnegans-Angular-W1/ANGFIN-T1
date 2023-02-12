import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';
import { RegistroComponent } from './pages/auth-registro/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { PermissionsGuard } from './core/guards/permissions.guard';
<<<<<<< HEAD
import { PasswordResetComponent } from './pages/usuarios/password-reset/password-reset.component';
=======
<<<<<<< HEAD
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
=======
import { InvestementsComponent } from './components/investements/investements.component';
>>>>>>> fd421930e5ca5f6b7cd991e824461c9cb24636a7
>>>>>>> 023bcbbcd1dfa28b5822a461c35d9477e06fa74a


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
    path: '', 
    redirectTo: 'auth-login', 
    pathMatch: 'full' 
  },
  {
<<<<<<< HEAD
    path:'password-reset',
    component: PasswordResetComponent
=======
    path : 'inversiones',
    component : InvestementsComponent
>>>>>>> 023bcbbcd1dfa28b5822a461c35d9477e06fa74a
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
