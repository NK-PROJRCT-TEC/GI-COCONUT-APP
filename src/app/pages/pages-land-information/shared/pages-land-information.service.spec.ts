import { TestBed } from '@angular/core/testing';

import { PagesLandInformationService } from './pages-land-information.service';

describe('PagesLandInformationService', () => {
  let service: PagesLandInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesLandInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
