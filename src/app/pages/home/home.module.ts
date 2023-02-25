import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExchangeContainerComponent } from './components/exchange-container/exchange-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SliderComponent } from './components/slider/slider.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GastosEditComponent } from './components/gastos-edit/gastos-edit.component';
import { BalanceComponent } from './components/balance/balance.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TransaccionesComponent,
    GastosEditComponent,
    ExchangeContainerComponent,
    SliderComponent,
    BalanceComponent,
    SliderComponent,
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
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [HomePageComponent],
})
export class HomeModule {}
