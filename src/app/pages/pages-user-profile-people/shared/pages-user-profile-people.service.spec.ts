import { TestBed } from '@angular/core/testing';

import { PagesUserProfilePeopleService } from './pages-user-profile-people.service';

describe('PagesUserProfilePeopleService', () => {
  let service: PagesUserProfilePeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesUserProfilePeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
