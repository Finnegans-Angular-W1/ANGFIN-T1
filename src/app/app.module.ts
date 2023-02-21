import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ROOT_REDUCERS } from './core/state/app.state';
import { ErrorInterceptor } from './core/services/error.interceptor';
import { ListIngEgrComponent } from './components/list-ing-egr/list-ing-egr.component';
import { ListIngresosComponent } from './components/list-ingresos/list-ingresos.component';
import { ListEgresosComponent } from './components/list-egresos/list-egresos.component';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { UsuariosRoutingModule } from './pages/usuarios/usuarios-routing.module';
import { UserProfileModule } from './pages/user-profile/user-profile.module';
import { UserProfileRoutingModuleModule } from './pages/user-profile/user-profile-routing-module.module';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { GlobalHttpInterceptor } from './core/services/global-http.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { AlertEffects } from './core/state/effects/alert.effect';
import { InvestementsComponent } from './pages/investments/investements/investements.component';
import { MaterialModule } from './material/material.module';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { AuthEffects } from './core/state/effects/auth.effect';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AuthService } from './core/services/auth.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DataEffects } from './core/state/effects/data.effect';

@NgModule({
  declarations: [
    AppComponent,
    ListIngEgrComponent,
    ListIngresosComponent,
    ListEgresosComponent,
    EditarPerfilComponent,
    ContactsComponent,
  ],
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
    UsuariosModule,
    UsuariosRoutingModule,
    SharedModule,
    UserProfileModule,
    UserProfileRoutingModuleModule,
    MaterialModule,
    AngularToastifyModule,
    EffectsModule.forRoot([AlertEffects, AuthEffects, DataEffects]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true,
    },
    ToastService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
