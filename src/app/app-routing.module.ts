import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';
import { RegistroComponent } from './pages/auth-registro/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';

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
    path:'shar',
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
