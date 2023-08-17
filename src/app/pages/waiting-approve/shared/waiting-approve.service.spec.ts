import { TestBed } from '@angular/core/testing';

import { WaitingApproveService } from './waiting-approve.service';

describe('WaitingApproveService', () => {
  let service: WaitingApproveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingApproveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
