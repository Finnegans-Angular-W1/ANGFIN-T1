import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReutilizableComponent } from './formulario-reutilizable.component';

describe('FormularioReutilizableComponent', () => {
  let component: FormularioReutilizableComponent;
  let fixture: ComponentFixture<FormularioReutilizableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReutilizableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReutilizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
