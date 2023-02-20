import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from 'src/app/core/models/Auth.service';
import { logout } from 'src/app/core/state/actions/login.actions';
import { User } from 'src/app/core/models/user';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserProfileComponent } from './user-profile.component';
import { PasswordResetComponent } from '../../usuarios/password-reset/password-reset.component';
import { Router } from '@angular/router';
import { from } from 'rxjs';


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
        HttpClientTestingModule
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
});

