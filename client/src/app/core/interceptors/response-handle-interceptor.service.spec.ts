import { TestBed } from '@angular/core/testing';

import { ResponseHandleInterceptorService } from './response-handle-interceptor.service';

describe('ResponseHandleInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseHandleInterceptorService = TestBed.get(ResponseHandleInterceptorService);
    expect(service).toBeTruthy();
  });
});
