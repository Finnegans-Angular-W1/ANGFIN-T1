import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './core/guards/permissions.guard';
import { LoginGuard } from './core/guards/login.guard';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ExchangeContainerComponent } from './pages/home/components/exchange-container/exchange-container.component';
import { SaldosComponent } from './pages/home/components/saldos/saldos.component';
import { ExpensesComponent } from './pages/home/components/expenses/expenses.component';

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
    loadChildren: () =>
      import('./pages/transaction/transaction.module').then(
        m => m.TransactionModule
      ),
    canActivate: [PermissionsGuard],
    //data: { animation: 'MovimientosPage' },
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
    loadChildren: () =>
      import('./pages/investments/investments.module').then(
        m => m.InvestmentsModule
      ),
    data: { animation: 'InversionesPage' },
    canActivate: [PermissionsGuard],
  },
  {
    path: 'deposit',
    component: SaldosComponent,
    canActivate: [PermissionsGuard],
  },
  {
    path: 'send-money',
    component: ExpensesComponent,
    canActivate: [PermissionsGuard],
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [PermissionsGuard],
  },
  {
    path: 'exchange',
    component: ExchangeContainerComponent,
    canActivate: [PermissionsGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      ),
    data: { animation: 'NotFoundPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
