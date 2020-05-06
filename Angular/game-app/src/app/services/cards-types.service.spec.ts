import { TestBed } from '@angular/core/testing';

import { CardsTypesService } from './cards-types.service';

describe('CardsTypesService', () => {
  let service: CardsTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
