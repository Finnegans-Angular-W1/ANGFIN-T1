import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIngresosComponent } from './list-ingresos.component';

describe('ListIngresosComponent', () => {
  let component: ListIngresosComponent;
  let fixture: ComponentFixture<ListIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIngresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
