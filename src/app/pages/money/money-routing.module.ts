import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { SaldosComponent } from './saldos/saldos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deposit',
    pathMatch: 'full'
  },
  {
    path: 'send',
    component: ExpensesComponent,
  },
  {
    path: 'deposit',
    component: SaldosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyRoutingModule {}
