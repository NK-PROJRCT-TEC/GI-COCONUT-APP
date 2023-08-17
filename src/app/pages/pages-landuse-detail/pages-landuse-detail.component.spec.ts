import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLanduseDetailComponent } from './pages-landuse-detail.component';

describe('PagesLanduseDetailComponent', () => {
  let component: PagesLanduseDetailComponent;
  let fixture: ComponentFixture<PagesLanduseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesLanduseDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesLanduseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
