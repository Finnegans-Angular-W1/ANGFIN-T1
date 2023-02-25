import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosEditComponent } from './components/gastos-edit/gastos-edit.component';
import { ExpensesComponent } from '../money/expenses/expenses.component';
import { SaldosComponent } from '../money/saldos/saldos.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
