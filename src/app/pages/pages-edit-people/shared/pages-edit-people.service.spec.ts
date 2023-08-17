import { TestBed } from '@angular/core/testing';

import { PagesEditPeopleService } from './pages-edit-people.service';

describe('PagesEditPeopleService', () => {
  let service: PagesEditPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesEditPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
