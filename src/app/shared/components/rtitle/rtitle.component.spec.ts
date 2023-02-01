import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtitleComponent } from './rtitle.component';

describe('RtitleComponent', () => {
  let component: RtitleComponent;
  let fixture: ComponentFixture<RtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
