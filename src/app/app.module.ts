import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RtitleComponent } from './shared/components/rtitle/rtitle.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RtitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    RtitleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
