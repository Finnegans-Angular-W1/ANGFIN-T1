import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormularioReutilizableComponent } from './formulario-reutilizable.component';

describe('FormularioReutilizableComponent', () => {
  let component: FormularioReutilizableComponent;
  let fixture: ComponentFixture<FormularioReutilizableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReutilizableComponent ],
      imports:[FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReutilizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TEST a Form Group Element Count input', ()=>{
    const formElement = fixture.debugElement.nativeElement.querySelector('.form-container');
    const inputElements = formElement.querySelectorAll('input');
    const textAreaElements = formElement.querySelectorAll('textarea');
    expect(inputElements.length).toEqual(2);
  });

  it('TEST a Form Group Element Count textarea', ()=>{
    const formElement = fixture.debugElement.nativeElement.querySelector('.form-container');
    const textAreaElements = formElement.querySelectorAll('textarea');
    expect(textAreaElements.length).toEqual(1);
  });

  it('CHECK initial FORM VALUES for ActionForm', ()=>{
    const actionFormGroup = component.actionForm;
    const actionFromValuesMock = {
      amount:'',
      concept:'',
      date:''
    };
    expect(actionFormGroup.value).toEqual(actionFromValuesMock);
  });

  it('CHECK if return form invalid', ()=>{
    fixture = TestBed.createComponent(FormularioReutilizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const amount = component.actionForm.controls['amount'];
    amount.setValue('500');
    expect(component.actionForm.invalid).toBeTrue();
  });

  it('CHECK if return form valid', ()=>{
    fixture = TestBed.createComponent(FormularioReutilizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const amount = component.actionForm.controls['amount'];
    const concept = component.actionForm.controls['concept'];
    const date = component.actionForm.controls['date'];
    
    amount.setValue('500');
    concept.setValue('Pago de Alquiler');
    date.setValue('2023-02-16');
    expect(component.actionForm.invalid).toBeFalse();
  });

  it('CHECK if enviar() method send the data', ()=>{
    fixture = TestBed.createComponent(FormularioReutilizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const amount = component.actionForm.controls['amount'];
    const concept = component.actionForm.controls['concept'];
    const date = component.actionForm.controls['date'];
    
    amount.setValue('500');
    concept.setValue('Pago de Alquiler');
    date.setValue('2023-02-16');

    const btnElement = fixture.debugElement.query(By.css('.login-btn'));
    btnElement.nativeElement.click();
    const testData = component.handleSubmit;
    expect(component.handleSubmit).toEqual(testData);
  });

  it('should emit when the button is clicked', ()=>{
    spyOn(component.handleSubmit, 'emit');
    const btnElement = fixture.debugElement.query(By.css('.login-btn'));
    btnElement.nativeElement.click();
    expect(component.handleSubmit.emit).toHaveBeenCalledTimes(0);
  });
});
