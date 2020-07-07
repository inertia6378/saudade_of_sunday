import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveDataExposureComponent } from './sensitive-data-exposure.component';

describe('SensitiveDataExposureComponent', () => {
  let component: SensitiveDataExposureComponent;
  let fixture: ComponentFixture<SensitiveDataExposureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensitiveDataExposureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensitiveDataExposureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
