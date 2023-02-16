import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ HttpClientTestingModule } from '@angular/common/http/testing'
import { ExpensesComponent } from './expenses.component';

describe('Test del componente ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
