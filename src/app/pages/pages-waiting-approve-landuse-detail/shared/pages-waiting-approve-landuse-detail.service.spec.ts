import { TestBed } from '@angular/core/testing';

import { PagesWaitingApproveLanduseDetailService } from './pages-waiting-approve-landuse-detail.service';

describe('PagesWaitingApproveLanduseDetailService', () => {
  let service: PagesWaitingApproveLanduseDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesWaitingApproveLanduseDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
