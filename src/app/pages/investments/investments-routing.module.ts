import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeContainerComponent } from './exchange-container/exchange-container.component';
import { InvestementsComponent } from './investements/investements.component';


const routes: Routes = [
  {
    path: '',
    component: ExchangeContainerComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentRoutingModule {}
