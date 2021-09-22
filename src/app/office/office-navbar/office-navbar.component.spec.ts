import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeNavbarComponent } from './office-navbar.component';

describe('OfficeNavbarComponent', () => {
  let component: OfficeNavbarComponent;
  let fixture: ComponentFixture<OfficeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
