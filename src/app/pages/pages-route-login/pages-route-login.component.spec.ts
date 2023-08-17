import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRouteLoginComponent } from './pages-route-login.component';

describe('PagesRouteLoginComponent', () => {
  let component: PagesRouteLoginComponent;
  let fixture: ComponentFixture<PagesRouteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesRouteLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesRouteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
