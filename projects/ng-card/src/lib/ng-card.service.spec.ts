import { TestBed } from '@angular/core/testing';

import { NgCardService } from './ng-card.service';

describe('NgCardService', () => {
  let service: NgCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
