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

import { ExchangeComponent } from '../pages/home/components/exchange/exchange.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    LoaderComponent,
    DialogComponent,
    RtitleComponent,
    ExchangeRateComponent,
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule ,
    ReactiveFormsModule 
  ],
  exports: [
    SidebarComponent,
    LoaderComponent,
    DialogComponent,
    ExchangeRateComponent,
    ExchangeComponent
  ],
})
export class SharedModule {}
