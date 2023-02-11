import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import { UserProfileRoutingModuleModule } from './user-profile-routing-module.module';



@NgModule({
  declarations: [ UserProfileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    UserProfileRoutingModuleModule
  ],
  exports:[
    UserProfileComponent
  ]
})
export class UserProfileModule { }
