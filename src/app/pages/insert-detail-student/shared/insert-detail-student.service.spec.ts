import { TestBed } from '@angular/core/testing';

import { InsertDetailStudentService } from './insert-detail-student.service';

describe('InsertDetailStudentService', () => {
  let service: InsertDetailStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertDetailStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
