import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthLoginRoutingModule
  ]
})
export class AuthLoginModule { }
