import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosEditComponent } from './components/gastos-edit/gastos-edit.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'expenses',
    component: GastosEditComponent, //ruta de prueba del comp. BORRAR cuando ya no se necesite
  },
  {
    path: 'expenses',
    component:ExpensesComponent    //ruta de prueba del comp. BORRAR cuando ya no se necesite
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
