import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestementsComponent } from './investements.component';

describe('InvestementsComponent', () => {
  let component: InvestementsComponent;
  let fixture: ComponentFixture<InvestementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
