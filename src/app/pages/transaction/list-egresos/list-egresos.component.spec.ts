import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEgresosComponent } from './list-egresos.component';

describe('ListEgresosComponent', () => {
  let component: ListEgresosComponent;
  let fixture: ComponentFixture<ListEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEgresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
