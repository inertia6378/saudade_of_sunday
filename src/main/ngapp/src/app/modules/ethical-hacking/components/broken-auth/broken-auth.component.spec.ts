import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenAuthComponent } from './broken-auth.component';

describe('BrokenAuthComponent', () => {
  let component: BrokenAuthComponent;
  let fixture: ComponentFixture<BrokenAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokenAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
