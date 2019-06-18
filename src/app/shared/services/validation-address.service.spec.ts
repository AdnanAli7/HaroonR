import { TestBed } from '@angular/core/testing';

import { ValidationAddressService } from './validation-address.service';

describe('ValidationAddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationAddressService = TestBed.get(ValidationAddressService);
    expect(service).toBeTruthy();
  });
});
