import { TestBed } from '@angular/core/testing';

import { NumberFactsService } from './number-facts.service';

describe('NumberFactsService', () => {
  let service: NumberFactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberFactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
