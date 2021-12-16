/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookLessonService } from './booklesson.service';

describe('Service: Lesson', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookLessonService]
    });
  });

  it('should ...', inject([BookLessonService], (service: BookLessonService) => {
    expect(service).toBeTruthy();
  }));
});
