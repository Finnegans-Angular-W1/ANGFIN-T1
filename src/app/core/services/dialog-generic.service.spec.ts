import { TestBed } from '@angular/core/testing';

import { DialogGenericService } from './dialog-generic.service';

describe('DialogGenericService', () => {
  let service: DialogGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
