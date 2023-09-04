import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesWaitingApproveLanduseDetailComponent } from './pages-waiting-approve-landuse-detail.component';

describe('PagesWaitingApproveLanduseDetailComponent', () => {
  let component: PagesWaitingApproveLanduseDetailComponent;
  let fixture: ComponentFixture<PagesWaitingApproveLanduseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesWaitingApproveLanduseDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesWaitingApproveLanduseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
