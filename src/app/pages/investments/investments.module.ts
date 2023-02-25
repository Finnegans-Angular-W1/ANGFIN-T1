import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestementsComponent } from './investements/investements.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [InvestementsComponent],
  imports: [
    CommonModule,
    InvestmentsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class InvestmentsModule { }
