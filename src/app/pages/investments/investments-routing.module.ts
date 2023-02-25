import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestementsComponent } from './investements/investements.component';

const routes: Routes = [{
  path: "",
  component: InvestementsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentsRoutingModule { }
