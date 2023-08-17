import { TestBed } from '@angular/core/testing';

import { PagesRegisterService } from './pages-register.service';

describe('PagesRegisterService', () => {
  let service: PagesRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
