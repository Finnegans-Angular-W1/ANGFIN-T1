import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { provideStore, StoreModule } from '@ngrx/store';
import { RtitleComponent } from 'src/app/shared/components/rtitle/rtitle.component';
import { SaldosComponent } from './saldos.component';

fdescribe('SaldosComponent', () => {
  let component: SaldosComponent;
  let fixture: ComponentFixture<SaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldosComponent, RtitleComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, MatDialogModule, StoreModule, StoreModule.forRoot(provideStore)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // form
  it('form invalido cuando esta vacio al inicio', () => {
    expect(component.cargarSaldosForm.valid).toBeFalsy();
  });

  // amount
  it('campo invalido cuando esta vacio', () => {
    let amount = component.cargarSaldosForm.controls['amount'];
    expect(amount.valid).toBeFalsy();
  });

  it('campo valido cuando no esta vacio', () => {
    component.cargarSaldosForm.controls['amount'].setValue(1000);
    let amount = component.cargarSaldosForm.controls['amount'];
    expect(amount.valid).toBeTruthy();
  });

  // concept
  it('campo invalido cuando esta vacio', () => {
    let concept = component.cargarSaldosForm.controls['concept'];
    expect(concept.valid).toBeFalsy();
  });

  it('campo valido cuando no esta vacio', () => {
    component.cargarSaldosForm.controls['concept'].setValue('Cobro');
    let concept = component.cargarSaldosForm.controls['concept'];
    expect(concept.valid).toBeTruthy();
  });

});
