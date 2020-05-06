import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTypesComponent } from './cards-types.component';

describe('CardsTypesComponent', () => {
  let component: CardsTypesComponent;
  let fixture: ComponentFixture<CardsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
