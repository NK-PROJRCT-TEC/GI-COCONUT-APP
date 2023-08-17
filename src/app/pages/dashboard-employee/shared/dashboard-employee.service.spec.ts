import { TestBed } from '@angular/core/testing';

import { DashboardEmployeeService } from './dashboard-employee.service';

describe('DashboardEmployeeService', () => {
  let service: DashboardEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
