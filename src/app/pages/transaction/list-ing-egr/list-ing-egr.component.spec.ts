import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListIngEgrComponent } from './list-ing-egr.component';

describe('ListIngEgrComponent', () => {
  let component: ListIngEgrComponent;
  let fixture: ComponentFixture<ListIngEgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIngEgrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIngEgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
