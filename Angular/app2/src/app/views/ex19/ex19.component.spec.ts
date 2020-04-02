import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex19Component } from './ex19.component';

describe('Ex19Component', () => {
  let component: Ex19Component;
  let fixture: ComponentFixture<Ex19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
