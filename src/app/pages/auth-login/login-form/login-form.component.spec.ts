import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('Test del formulario de login', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('No hay datos escritos', ()=>{
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const email = app.loginForm.controls['email']
    const password = app.loginForm.controls['password']
    email.setValue("");
    password.setValue("");
    expect(app.loginForm.invalid).toBeTrue();
  });

  it('Solo Email', ()=>{
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const email = app.loginForm.controls['email']
    const password = app.loginForm.controls['password']
    email.setValue("juanperez@example.com");
    password.setValue("");
    expect(app.loginForm.invalid).toBeTrue();
  });

  it('solo contraseña', ()=>{
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const email = app.loginForm.controls['email']
    const password = app.loginForm.controls['password']
    email.setValue("");
    password.setValue("abc123");
    expect(app.loginForm.invalid).toBeTrue();
  });

  it('email sin arroba', ()=>{
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const email = app.loginForm.controls['email']
    const password = app.loginForm.controls['password']
    email.setValue("juanperezexample.com");
    password.setValue("abc123");
    expect(app.loginForm.invalid).toBeTrue();
  });

  it('email sin punto ', ()=>{
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const email = app.loginForm.controls['email']
    const password = app.loginForm.controls['password']
    email.setValue("juanperez@example");
    password.setValue("abc123");
    expect(app.loginForm.invalid).toBeTrue();
  });
  it('email sin ninguna de las anteriores', ()=>{
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const email = app.loginForm.controls['email']
    const password = app.loginForm.controls['password']
    email.setValue("juanperezexamplecom");
    password.setValue("abc123");
    expect(app.loginForm.invalid).toBeTrue();
  });

  it('Todo correcto', ()=>{
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const email = app.loginForm.controls['email']
    const password = app.loginForm.controls['password']
    email.setValue("juanperez@example.com");
    password.setValue("abc123");
    expect(app.loginForm.invalid).toBeFalse();
  });
  
  
  it('Probando el boton deshabilitado habilitado', () => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    fixture.detectChanges();
  
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.hasAttribute('disabled')).toBeTrue();
  
    component.loginForm.controls['email'].setValue('Juanperez@example.com');
    component.loginForm.controls['password'].setValue('abc123');
    fixture.detectChanges();
  
    expect(button.hasAttribute('disabled')).toBeFalse();
  });

  it('se llama al evento submit en las condiciones dadas', () => {
    spyOn(component, 'onSubmit');
    component.loginForm.controls['email'].setValue('Juanperez@example.com');
    component.loginForm.controls['password'].setValue('abc123');
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('No se puede llamar al evento submit si el form esta mal', () => {
    spyOn(component, 'onSubmit');
    component.loginForm.controls['email'].setValue('Juanperezexampl');
    component.loginForm.controls['password'].setValue('abc123');
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.onSubmit).not.toHaveBeenCalled();
  });


});

