import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEditLanduseDetailComponent } from './pages-edit-landuse-detail.component';

describe('PagesEditLanduseDetailComponent', () => {
  let component: PagesEditLanduseDetailComponent;
  let fixture: ComponentFixture<PagesEditLanduseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEditLanduseDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesEditLanduseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
