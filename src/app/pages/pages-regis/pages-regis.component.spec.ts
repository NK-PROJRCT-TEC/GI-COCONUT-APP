import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRegisComponent } from './pages-regis.component';

describe('PagesRegisComponent', () => {
  let component: PagesRegisComponent;
  let fixture: ComponentFixture<PagesRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesRegisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
