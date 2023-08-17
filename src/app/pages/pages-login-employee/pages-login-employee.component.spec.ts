import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLoginEmployeeComponent } from './pages-login-employee.component';

describe('PagesLoginEmployeeComponent', () => {
  let component: PagesLoginEmployeeComponent;
  let fixture: ComponentFixture<PagesLoginEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesLoginEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesLoginEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
