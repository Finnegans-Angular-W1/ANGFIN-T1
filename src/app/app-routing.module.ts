import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './core/guards/permissions.guard';
import { PasswordResetComponent } from './pages/user-profile/password-reset/password-reset.component';
import { InvestementsComponent } from './components/investements/investements.component';
import { LoginGuard } from './core/guards/login.guard';
import { ListIngEgrComponent } from './components/list-ing-egr/list-ing-egr.component';
import { ListEgresosComponent } from './components/list-egresos/list-egresos.component';
import { ListIngresosComponent } from './components/list-ingresos/list-ingresos.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TransaccionesComponent } from './pages/home/components/transacciones/transacciones.component';
import { ExchangeContainerComponent } from './pages/home/components/exchange-container/exchange-container.component';
import { SaldosComponent } from './pages/home/components/saldos/saldos.component';

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
    data: { animation: 'LoginPage' },
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/auth-registro/auth-registro.module').then(
        m => m.AuthRegistroModule
      ),
    canActivate: [LoginGuard],
    data: { animation: 'RegisterPage' },
  },
  {
    path: 'transactions',
    component: ListIngEgrComponent,
    data: { animation: 'MovimientosPage' },
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
    data: { animation: 'HomePage' },
    canActivate: [PermissionsGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/user-profile/user-profile.module').then(
        m => m.UserProfileModule
      ),
    data: { animation: 'PerfilPage' },
    canActivate: [PermissionsGuard],
  },
  {
    path: 'investments',
    component: InvestementsComponent,
    data: { animation: 'InversionesPage' },
  },
  {
    path: 'send-money',
    component: SaldosComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'exchange',
    component: ExchangeContainerComponent,
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      ),
    data: { animation: 'NotFoundPage' },
  },
  {
    path: 'liste',
    component: ListEgresosComponent,
    data: { animation: 'EgresosPage' },
  },
  {
    path: 'listi',
    component: ListIngresosComponent,
    data: { animation: 'IngresosPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
