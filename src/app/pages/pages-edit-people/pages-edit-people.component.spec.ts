import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEditPeopleComponent } from './pages-edit-people.component';

describe('PagesEditPeopleComponent', () => {
  let component: PagesEditPeopleComponent;
  let fixture: ComponentFixture<PagesEditPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEditPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesEditPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
