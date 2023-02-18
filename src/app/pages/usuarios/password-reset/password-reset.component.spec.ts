import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PasswordResetComponent,
  MyErrorStateMatcher,
} from './password-reset.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from 'src/app/core/services/users.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { By } from '@angular/platform-browser';

describe('PasswordResetComponent', () => {
  let component: PasswordResetComponent;
  let fixture: ComponentFixture<PasswordResetComponent>;
  let mockUserService: jasmine.SpyObj<UsersService>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UsersService', ['resetPassword']);
    await TestBed.configureTestingModule({
      declarations: [PasswordResetComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
      ],
      providers: [
        { provide: UsersService, useValue: mockUserService },
        HttpClient,
        HttpService,
        HttpHandler,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const email = component.passwordResetForm.controls['email'];
    const password = component.passwordResetForm.controls['password'];
    const confirmPassword =
      component.passwordResetForm.controls['confirmPassword'];
    email.setValue('');
    email.markAsTouched();
    password.markAllAsTouched();
    password.setValue('');
    confirmPassword.markAllAsTouched();
    confirmPassword.setValue('');
  });

  describe('passwordResetForm', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should invalid form when empty', () => {
      const button = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(component.passwordResetForm.valid).toBeFalsy();
      expect(button.disabled).toBeTruthy();
    });

    it('should enable the button if the form is valid', () => {
      expect(component.passwordResetForm.valid).toBeFalsy();
      const email = component.passwordResetForm.controls['email'];
      const password = component.passwordResetForm.controls['password'];
      const confirmPassword =
        component.passwordResetForm.controls['confirmPassword'];

      email.setValue('test@test.com');
      password.setValue('test');
      confirmPassword.setValue('test');
      fixture.detectChanges();

      expect(component.passwordResetForm.valid).toBeTruthy();

      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(button.disabled).toBeFalsy();
    });
  });

  describe('email field', () => {
    it('should validate email field', () => {
      const email = component.passwordResetForm.controls['email'];
      expect(email.valid).toBeFalsy();
      expect(email?.errors?.['required']).toBeTruthy();

      email.setValue('test');
      expect(email.valid).toBeFalsy();
      expect(email?.errors?.['email']).toBeTruthy();

      email.setValue('test@test.com');
      expect(email.valid).toBeTruthy();
      expect(email.errors).toBeNull();
    });

    it('should display an error message when the email field is empty', () => {
      const email = component.passwordResetForm.controls['email'];
      email.setValue('');
      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(By.css('.err-email'));
      expect(errorMessage).toBeTruthy();
    });

    it('should display an error message when the email format is no correct', () => {
      const email = component.passwordResetForm.controls['email'];

      email.setValue('test');
      email.markAsTouched();

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(By.css('.err-email'));

      expect(errorMessage).toBeTruthy();
      expect(errorMessage.nativeElement.textContent).toContain(
        'Introduzca una dirección de correo electrónica válida'
      );
    });
  });

  describe('password field', () => {
    it('should validate password field', () => {
      const password = component.passwordResetForm.controls['password'];

      expect(password.valid).toBeFalsy();
      expect(password?.errors?.['required']).toBeTruthy();

      password.setValue('test');
      expect(password.valid).toBeTruthy();
      expect(password.errors).toBeNull();
    });

    it('should display an error message when the password field is empty', () => {
      const password = component.passwordResetForm.controls['password'];
      password.setValue('');
      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(By.css('.err-password'));
      expect(errorMessage).toBeTruthy();

      expect(errorMessage.nativeElement.textContent).toContain(
        ' Este campo no puede quedar vacío '
      );
    });
  });

  describe('confirmPassword field', () => {
    it('should validate confirmPassword field', () => {
      const confirmPassword =
        component.passwordResetForm.controls['confirmPassword'];
      expect(confirmPassword.valid).toBeFalsy();
      expect(confirmPassword?.errors?.['required']).toBeTruthy();

      confirmPassword.setValue('test');
      expect(confirmPassword.valid).toBeTruthy();
      expect(confirmPassword.errors).toBeNull();
    });

    it('should validate password and confirmPassword fields match', () => {
      const password = component.passwordResetForm.controls['password'];
      const confirmPassword =
        component.passwordResetForm.controls['confirmPassword'];

      password.setValue('test');
      confirmPassword.setValue('test2');
      expect(component.passwordResetForm.errors?.['notSame']).toBeTruthy();

      confirmPassword.setValue('test');
      expect(component.passwordResetForm.errors).toBeNull();
    });

    it('should display an error message when passwords do not match', () => {
      const password = component.passwordResetForm.controls['password'];
      const confirmPassword =
        component.passwordResetForm.controls['confirmPassword'];

      password.setValue('test');
      confirmPassword.setValue('test2');

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(By.css('.err-confirm'));

      expect(errorMessage).toBeTruthy();
      expect(errorMessage.nativeElement.textContent).toContain(
        'Las contraseñas no coinciden'
      );
    });
  });
});
