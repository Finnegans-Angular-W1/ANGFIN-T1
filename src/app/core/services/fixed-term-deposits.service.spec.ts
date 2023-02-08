import { TestBed } from '@angular/core/testing';

import { FixedTermDepositsService } from './fixed-term-deposits.service';

describe('FixedTermDepositsService', () => {
  let service: FixedTermDepositsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedTermDepositsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
