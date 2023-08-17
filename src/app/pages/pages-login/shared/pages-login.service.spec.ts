import { TestBed } from '@angular/core/testing';

import { PagesLoginService } from './pages-login.service';

describe('PagesLoginService', () => {
  let service: PagesLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
