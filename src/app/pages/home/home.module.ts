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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomePageComponent,
    TransaccionesComponent,
    AmountPipe,
    GastosEditComponent,
    ExpensesComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule

  ],
  exports: [HomePageComponent],
})
export class HomeModule {}
