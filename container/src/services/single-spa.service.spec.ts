import { TestBed } from '@angular/core/testing';

import { SingleSpaService } from './single-spa.service';

describe('SingleSpaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleSpaService = TestBed.get(SingleSpaService);
    expect(service).toBeTruthy();
  });
});
