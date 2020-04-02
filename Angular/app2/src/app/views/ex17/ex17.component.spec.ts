import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex17Component } from './ex17.component';

describe('Ex17Component', () => {
  let component: Ex17Component;
  let fixture: ComponentFixture<Ex17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
