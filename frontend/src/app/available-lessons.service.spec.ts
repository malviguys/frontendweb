/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AvailableLessonsService } from './available-lessons.service';

describe('Service: AvailableLessons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailableLessonsService]
    });
  });

  it('should ...', inject([AvailableLessonsService], (service: AvailableLessonsService) => {
    expect(service).toBeTruthy();
  }));
});
