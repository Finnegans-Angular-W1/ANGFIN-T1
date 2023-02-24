import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEgresosComponent } from './list-egresos/list-egresos.component';
import { ListIngEgrComponent } from './list-ing-egr/list-ing-egr.component';
import { ListIngresosComponent } from './list-ingresos/list-ingresos.component';

const routes: Routes = [

  {
    path: 'egresos',
    component: ListEgresosComponent,

  },
  {
    path: 'ingresos',
    component: ListIngresosComponent,

  },

  {
    path: '',
    component: ListIngEgrComponent,

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
