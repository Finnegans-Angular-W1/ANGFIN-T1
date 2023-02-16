import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import * as exp from 'constants';

import { LoginFormComponent } from './login-form.component';

describe('TestingLoginForm--------------------------------------------------------------------------------------------------------', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginFormComponent],
    }).compileComponents();
  });

  it('debe existir el Form Componente', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy(); //Ademas que sea true, tiene que existir
  });

  it('debe retornar el  Form Invalido', () => {
    //Si le paso un solo valor-input el Form es invalido.
    const fixture = TestBed.createComponent(LoginFormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const email = component.loginForm.controls['email'];
    email.setValue('lucas123@gmail.com');
    expect(component.loginForm.invalid).toBeTruthy(); //Ademas que sea true, tiene que existir
  });

  it('debe retornar un Form Valido', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const email = component.loginForm.controls['email'];
    email.setValue('lucas123@gmail.com');
    const pasword = component.loginForm.controls['password'];
    pasword.setValue('password12345');
    expect(component.loginForm.invalid).toBeFalse();
  });

  /*it(`Debe de actulizar datos de usuario`, () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let email = app.loginForm.controls['email'];
    let password = app.loginForm.controls['password'];

    email.setValue('leifer33@gmail.com');
    password.setValue('123456');
    const btnElement = fixture.debugElement.query(By.css('button.login-btn'));
    btnElement.nativeElement.click();

    //const testData = { user: 1 };
    //expect(app.isCheck).toEqual(testData);
  });*/
});
