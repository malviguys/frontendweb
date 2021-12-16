import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {MenuItem} from 'primeng/api';
import { BookLessonService } from '../booklesson.service';

@Component({
  selector: 'app-lessonsbooked',
  templateUrl: './lessonsbooked.component.html',
  styleUrls: ['./lessonsbooked.component.css']
})
export class LessonsbookedComponent implements OnInit {
  items: MenuItem[] = [];
  booking: any [] = [];

  constructor(private bookLessonService: BookLessonService){
    bookLessonService.getBookedLesson().subscribe(
      (response) => {
        console.log(response)
        _.map(response, (el) => {
          this.booking.push(el)
        })
      },
      (error) => {console.log(error)},
    )
  }

  ngOnInit() {
      this.items = [
          {label:'Homepage', routerLink :"/homepage-student"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }
}
