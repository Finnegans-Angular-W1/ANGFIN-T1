import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from '../components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RtitleComponent } from './components/rtitle/rtitle.component';
import { MaterialModule } from '../material/material.module';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { ExchangeContainerComponent } from '../pages/home/components/exchange-container/exchange-container.component';

import { ExchangeComponent } from '../pages/home/components/exchange/exchange.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReutilizableComponent } from './components/formulario-reutilizable/formulario-reutilizable.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    LoaderComponent,
    DialogComponent,
    RtitleComponent,
    ExchangeRateComponent,
    ExchangeComponent,
    FormularioReutilizableComponent,
    ExchangeContainerComponent

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MaterialModule,
    FormsModule ,
    ReactiveFormsModule ,
    MatFormFieldModule, 
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    SidebarComponent,
    LoaderComponent,
    DialogComponent,
    FormularioReutilizableComponent,
    ExchangeComponent,
    ExchangeRateComponent,
    RtitleComponent

  ],
  providers: [
  ]
})
export class SharedModule {}
