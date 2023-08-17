import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingApproveComponent } from './waiting-approve.component';

describe('WaitingApproveComponent', () => {
  let component: WaitingApproveComponent;
  let fixture: ComponentFixture<WaitingApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
