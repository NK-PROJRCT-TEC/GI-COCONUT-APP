import { TestBed } from '@angular/core/testing';

import { PagesLanduseDetailService } from './pages-landuse-detail.service';

describe('PagesLanduseDetailService', () => {
  let service: PagesLanduseDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesLanduseDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
