import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDetailStudentComponent } from './insert-detail-student.component';

describe('InsertDetailStudentComponent', () => {
  let component: InsertDetailStudentComponent;
  let fixture: ComponentFixture<InsertDetailStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDetailStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
