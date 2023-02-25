import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyRoutingModule } from './money-routing.module';
import { ExpensesComponent } from './expenses/expenses.component';
import { SaldosComponent } from './saldos/saldos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [ExpensesComponent, SaldosComponent],
  imports: [
    CommonModule,
    MoneyRoutingModule,
    SharedModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class MoneyModule {}
