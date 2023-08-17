import { TestBed } from '@angular/core/testing';

import { PendingLanduseStatusService } from './pending-landuse-status.service';

describe('PendingLanduseStatusService', () => {
  let service: PendingLanduseStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingLanduseStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
