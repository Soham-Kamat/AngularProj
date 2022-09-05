import { TestBed } from '@angular/core/testing';

import { CustomerViaLocalStorageService } from './customer-via-local-storage.service';

describe('CustomerViaLocalStorageService', () => {
  let service: CustomerViaLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerViaLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
