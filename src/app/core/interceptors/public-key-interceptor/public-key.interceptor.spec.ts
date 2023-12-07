import { TestBed } from '@angular/core/testing';

import { PublicKeyInterceptor } from './public-key.interceptor';

describe('PublicKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PublicKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PublicKeyInterceptor = TestBed.inject(PublicKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
