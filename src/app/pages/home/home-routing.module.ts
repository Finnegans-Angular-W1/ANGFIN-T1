import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { SaldosComponent } from './components/saldos/saldos.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'expenses',
    component:ExpensesComponent    //ruta de prueba del comp. BORRAR cuando ya no se necesite
  },
  {
    path: 'saldos',
    component: SaldosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
