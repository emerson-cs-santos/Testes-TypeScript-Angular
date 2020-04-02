import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex16Component } from './ex16.component';

describe('Ex16Component', () => {
  let component: Ex16Component;
  let fixture: ComponentFixture<Ex16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
