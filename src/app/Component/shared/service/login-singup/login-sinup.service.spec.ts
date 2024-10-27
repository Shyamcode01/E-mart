import { TestBed } from '@angular/core/testing';

import { LoginSinupService } from './login-sinup.service';

describe('LoginSinupService', () => {
  let service: LoginSinupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSinupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
