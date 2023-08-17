import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLanduseStatusComponent } from './pending-landuse-status.component';

describe('PendingLanduseStatusComponent', () => {
  let component: PendingLanduseStatusComponent;
  let fixture: ComponentFixture<PendingLanduseStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingLanduseStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingLanduseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
