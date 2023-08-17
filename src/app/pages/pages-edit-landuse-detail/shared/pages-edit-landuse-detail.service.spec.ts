import { TestBed } from '@angular/core/testing';

import { PagesEditLanduseDetailService } from './pages-edit-landuse-detail.service';

describe('PagesEditLanduseDetailService', () => {
  let service: PagesEditLanduseDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesEditLanduseDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
