import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestementsComponent } from 'src/app/pages/investments/investements/investements.component';
import { MaterialModule } from 'src/app/material/material.module';
import { InvestmentRoutingModule } from './investments-routing.module';
import { ExchangeContainerComponent } from './exchange-container/exchange-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExchangeComponent } from './exchange/exchange.component';

@NgModule({
  declarations: [InvestementsComponent, ExchangeContainerComponent,
  ExchangeComponent],
  imports: [
    CommonModule, 
    MaterialModule, 
    InvestmentRoutingModule,
    SharedModule
  ],
})
export class InvestmentsModule {}
