import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCertificateComponent } from './pages-certificate.component';

describe('PagesCertificateComponent', () => {
  let component: PagesCertificateComponent;
  let fixture: ComponentFixture<PagesCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
