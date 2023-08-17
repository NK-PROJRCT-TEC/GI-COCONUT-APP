import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRegisEmployeeComponent } from './pages-regis-employee.component';

describe('PagesRegisEmployeeComponent', () => {
  let component: PagesRegisEmployeeComponent;
  let fixture: ComponentFixture<PagesRegisEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesRegisEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesRegisEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
