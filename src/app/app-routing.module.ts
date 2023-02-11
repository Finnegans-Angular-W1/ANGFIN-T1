import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';
import { RegistroComponent } from './pages/auth-registro/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { PermissionsGuard } from './core/guards/permissions.guard';
import { InvestementsComponent } from './components/investements/investements.component';


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
    path : 'inversiones',
    component : InvestementsComponent
  },
  {
    path:'shar',
    //canActivate: [PermissionsGuard],
    loadChildren:()=> import('./shared/shared.module').then( m=> m.SharedModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
