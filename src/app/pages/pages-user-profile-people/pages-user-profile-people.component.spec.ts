import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesUserProfilePeopleComponent } from './pages-user-profile-people.component';

describe('PagesUserProfilePeopleComponent', () => {
  let component: PagesUserProfilePeopleComponent;
  let fixture: ComponentFixture<PagesUserProfilePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesUserProfilePeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesUserProfilePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
