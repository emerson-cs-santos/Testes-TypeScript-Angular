import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex20Component } from './ex20.component';

describe('Ex20Component', () => {
  let component: Ex20Component;
  let fixture: ComponentFixture<Ex20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
