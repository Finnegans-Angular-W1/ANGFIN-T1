import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from '../components/footer/footer.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './components/loader/loader.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


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
    MatDialogModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SidebarComponent,
    LoaderComponent,
    DialogComponent
  ]
})
export class SharedModule { }
