import { TestBed } from '@angular/core/testing';

import { PagesLoginEmployeeService } from './pages-login-employee.service';

describe('PagesLoginEmployeeService', () => {
  let service: PagesLoginEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesLoginEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
