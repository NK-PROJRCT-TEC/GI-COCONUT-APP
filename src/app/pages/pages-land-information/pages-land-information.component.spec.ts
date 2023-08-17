import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLandInformationComponent } from './pages-land-information.component';

describe('PagesLandInformationComponent', () => {
  let component: PagesLandInformationComponent;
  let fixture: ComponentFixture<PagesLandInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesLandInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesLandInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
