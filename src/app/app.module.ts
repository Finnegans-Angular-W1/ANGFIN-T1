import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AuthLoginModule } from './pages/auth-login/auth-login.module';
import { AuthLoginRoutingModule } from './pages/auth-login/auth-login-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthRegistroRoutingModule } from './pages/auth-registro/auth-registro-routing.module';
import { AuthRegistroModule } from './pages/auth-registro/auth-registro.module';
import { HomeComponent } from './pages/home/home.component';
import { ROOT_REDUCERS } from './core/state/app.state';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpInterceptor } from './core/services/global-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    AuthRegistroModule,
    AuthRegistroRoutingModule,
    AuthLoginModule,
    AuthLoginRoutingModule,
    SharedModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, 
    useClass: GlobalHttpInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }