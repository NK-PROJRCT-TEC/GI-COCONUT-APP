import { TestBed } from '@angular/core/testing';

import { PagesWaitingApproveLanduseService } from './pages-waiting-approve-landuse.service';

describe('PagesWaitingApproveLanduseService', () => {
  let service: PagesWaitingApproveLanduseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesWaitingApproveLanduseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
