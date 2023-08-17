import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesWaitingApproveLanduseComponent } from './pages-waiting-approve-landuse.component';

describe('PagesWaitingApproveLanduseComponent', () => {
  let component: PagesWaitingApproveLanduseComponent;
  let fixture: ComponentFixture<PagesWaitingApproveLanduseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesWaitingApproveLanduseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesWaitingApproveLanduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
