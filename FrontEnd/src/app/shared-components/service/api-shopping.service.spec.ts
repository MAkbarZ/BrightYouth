import { TestBed } from '@angular/core/testing';

import { ApiShoppingService } from './api-shopping.service';

describe('ApiShoppingService', () => {
  let service: ApiShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
