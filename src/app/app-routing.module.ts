import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';
import { RegistroComponent } from './pages/auth-registro/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { PermissionsGuard } from './core/guards/permissions.guard';
<<<<<<< HEAD
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
=======
import { InvestementsComponent } from './components/investements/investements.component';
>>>>>>> fd421930e5ca5f6b7cd991e824461c9cb24636a7


const routes: Routes = [ 
  {
    path:'auth-login',
    component:LoginComponent
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
    path : 'inversiones',
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
