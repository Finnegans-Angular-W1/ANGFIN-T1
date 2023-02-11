import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ROOT_REDUCERS } from './core/state/app.state';
import { AuthLoginModule } from './pages/auth-login/auth-login.module';
import { AuthLoginRoutingModule } from './pages/auth-login/auth-login-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthRegistroRoutingModule } from './pages/auth-registro/auth-registro-routing.module';
import { AuthRegistroModule } from './pages/auth-registro/auth-registro.module';
import { HomeComponent } from './pages/home/home.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { GlobalHttpInterceptor } from './core/services/global-http.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { AlertEffects } from './core/state/effects/alert.effect';
import { InvestementsComponent } from './components/investements/investements.component';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [AppComponent, HomeComponent,InvestementsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AuthRegistroModule,
    AuthRegistroRoutingModule,
    AuthLoginModule,
    AuthLoginRoutingModule,
    SharedModule,
    MaterialModule,
    AngularToastifyModule,
    EffectsModule.forRoot([AlertEffects]),
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, 
    useClass: GlobalHttpInterceptor,
    multi: true,
  },ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {}
