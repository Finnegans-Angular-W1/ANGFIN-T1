import { TestBed } from '@angular/core/testing';

import { ExchangeeService } from './exchangee.service';

describe('ExchangeeService', () => {
  let service: ExchangeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
