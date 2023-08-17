import { TestBed } from '@angular/core/testing';

import { PagesRouteLoginService } from './pages-route-login.service';

describe('PagesRouteLoginService', () => {
  let service: PagesRouteLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesRouteLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
