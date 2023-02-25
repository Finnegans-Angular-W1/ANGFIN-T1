import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RtitleComponent } from './components/rtitle/rtitle.component';
import { MaterialModule } from '../material/material.module';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { ExchangeComponent } from '../pages/home/components/exchange/exchange.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReutilizableComponent } from './components/formulario-reutilizable/formulario-reutilizable.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DialogGenericoComponent } from './components/dialog/components/dialos.generic';

@NgModule({
  declarations: [
    SidebarComponent,
    LoaderComponent,
    DialogComponent,
    RtitleComponent,
    ExchangeRateComponent,
    ExchangeComponent,
    FormularioReutilizableComponent,
    FooterComponent,
    DialogGenericoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  exports: [
    SidebarComponent,
    LoaderComponent,
    DialogComponent,
    FormularioReutilizableComponent,
    ExchangeComponent,
    ExchangeRateComponent,
    ExchangeComponent,
    RtitleComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
})
export class SharedModule {}
