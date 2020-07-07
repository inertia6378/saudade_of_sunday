import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwaspComponent } from './owasp.component';

describe('OwaspComponent', () => {
  let component: OwaspComponent;
  let fixture: ComponentFixture<OwaspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwaspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
