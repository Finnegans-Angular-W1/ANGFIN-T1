import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRegistroRoutingModule } from './auth-registro-routing.module';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRegistroRoutingModule
  ]
})
export class AuthRegistroModule { }
