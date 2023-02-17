import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmountPipe } from 'src/app/shared/pipes/amount.pipe';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { GastosEditComponent } from './components/gastos-edit/gastos-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExchangeContainerComponent } from './components/exchange-container/exchange-container.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TransaccionesComponent,
    AmountPipe,
    GastosEditComponent,
    ExpensesComponent,
    ExchangeContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    SharedModule,
  ],
  exports: [HomePageComponent],
})
export class HomeModule {}
