import { TestBed } from '@angular/core/testing';

import { PagesRegisService } from './pages-regis.service';

describe('PagesRegisService', () => {
  let service: PagesRegisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesRegisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
