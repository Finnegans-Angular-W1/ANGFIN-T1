import { TestBed } from '@angular/core/testing';

import { GlobalHttpInterceptor } from './global-http.interceptor';

describe('GlobalHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalHttpInterceptor = TestBed.inject(GlobalHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
