import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from '../components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    LoaderComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    SidebarComponent,
    LoaderComponent,
    DialogComponent
  ]
})
export class SharedModule { }
