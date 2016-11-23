/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmotionsService } from './emotions.service';

describe('EmotionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmotionsService]
    });
  });

  it('should ...', inject([EmotionsService], (service: EmotionsService) => {
    expect(service).toBeTruthy();
  }));
});
