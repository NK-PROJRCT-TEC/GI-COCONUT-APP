import { TestBed } from '@angular/core/testing';

import { PagesCertificateService } from './pages-certificate.service';

describe('PagesCertificateService', () => {
  let service: PagesCertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesCertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
