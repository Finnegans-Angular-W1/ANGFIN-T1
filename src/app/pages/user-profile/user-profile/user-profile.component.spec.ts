import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from 'src/app/core/models/Auth.service';
import { User } from 'src/app/core/models/user';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserProfileComponent } from './user-profile.component';
import { PasswordResetComponent } from '../password-reset/password-reset.component';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let authService: AuthService;
  let router: Router;

  const mockUser: User = {
    first_name: 'Juan',
    last_name: 'Doe',
    email: 'juan.doe@example.com',
    password: 'password',
    roleId: 0,
    points: 0
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        MatCardModule,
        MatButtonModule
      ],
      providers: [
        AuthService,
        {
         provide: 'AuthToken',
         useValue: 'mockToken'
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('set user data from service', () => {
    const user: User = {
      first_name: 'Juan',
      last_name: 'Doe',
      email: 'juan.doe@example.com',
      password: 'password',
      roleId: 0,
      points: 0
    };
    spyOn(authService, 'getUser$').and.returnValue(from([user]));
    component.ngOnInit();
    expect(component.usuario).toEqual(user);
  });

  it('navigate to password reset page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.CambiarContrasenia();
    expect(navigateSpy).toHaveBeenCalledWith(['/password-reset']);
  });

  it('navigate to edit profile page', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.EditarPerfil();
    expect(navigateSpy).toHaveBeenCalledWith(['/editar-perfil']);
  });

  it('do logout action on logout', () => {
    const store = TestBed.inject(Store);
    const dispatchSpy = spyOn(store, 'dispatch');
    component.logout();
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('call CambiarContrasenia function when "Cambiar Contraseña" button is clicked', () => {
    spyOn(component, 'CambiarContrasenia');
    const cambiarContraseniaButton = fixture.debugElement.query(By.css('[color="primary"]')).nativeElement;
    cambiarContraseniaButton.click();
    expect(component.CambiarContrasenia).toHaveBeenCalled();
  });

  it('call EditarPerfil function when "Editar Perfil" button is clicked', () => {
    spyOn(component, 'EditarPerfil');
    const editarPerfilButton = fixture.debugElement.query(By.css('[color="accent"]')).nativeElement;
    editarPerfilButton.click();
    expect(component.EditarPerfil).toHaveBeenCalled();
  });

  it('call logout function when "Cerrar Sesion" button is clicked', () => {
    spyOn(component, 'logout');
    const cerrarSesionButton = fixture.debugElement.query(By.css('[color="link"]')).nativeElement;
    cerrarSesionButton.click();
    expect(component.logout).toHaveBeenCalled();
  });



});

