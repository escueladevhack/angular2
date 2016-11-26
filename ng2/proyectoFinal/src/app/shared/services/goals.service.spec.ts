/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoalsService } from './goals.service';

describe('GoalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoalsService]
    });
  });

  it('should ...', inject([GoalsService], (service: GoalsService) => {
    expect(service).toBeTruthy();
  }));
});
