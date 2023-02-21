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
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TransaccionesComponent } from './pages/home/components/transacciones/transacciones.component';


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
    loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule),
    canActivate: [PermissionsGuard]
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
    path:'password-reset',
    component: PasswordResetComponent 
  },

  {
    path:'transa',
    component: TransaccionesComponent 
  },
  {
    path:'shar',
    //canActivate: [PermissionsGuard],
    loadChildren:()=> import('./shared/shared.module').then( m=> m.SharedModule)
  },
  {
    path: 'inversiones',
    component: InvestementsComponent,
  },
  {
    path: 'contactos',
    component: ContactsComponent,
  },
  {
    path: 'user-profile',
    // canActivate: [PermissionsGuard],
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
