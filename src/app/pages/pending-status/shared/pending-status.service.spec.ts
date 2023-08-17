import { TestBed } from '@angular/core/testing';

import { PendingStatusService } from './pending-status.service';

describe('PendingStatusService', () => {
  let service: PendingStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
