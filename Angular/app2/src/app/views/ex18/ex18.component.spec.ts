import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex18Component } from './ex18.component';

describe('Ex18Component', () => {
  let component: Ex18Component;
  let fixture: ComponentFixture<Ex18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
