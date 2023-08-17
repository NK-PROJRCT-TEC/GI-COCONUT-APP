import { TestBed } from '@angular/core/testing';

import { UserprofileStudentService } from './userprofile-student.service';

describe('UserprofileStudentService', () => {
  let service: UserprofileStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserprofileStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
