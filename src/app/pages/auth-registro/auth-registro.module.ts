import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRegistroRoutingModule } from './auth-registro-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRegistroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports:[RegistroComponent]
})
export class AuthRegistroModule { }
