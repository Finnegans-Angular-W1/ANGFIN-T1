import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule
    
  ]
})
export class SharedModule { }
