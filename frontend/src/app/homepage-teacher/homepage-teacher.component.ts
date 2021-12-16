import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import * as _ from 'lodash';
import { AvailableLessonsService } from '../available-lessons.service';
import { Router } from '@angular/router';
import { BookLessonService } from '../booklesson.service';

@Component({
  selector: 'app-homepage-teacher',
  templateUrl: './homepage-teacher.component.html',
  styleUrls: ['./homepage-teacher.component.css']
})
export class HomepageTeacherComponent implements OnInit {
  items: MenuItem[] = [];
  lessons: any[] = [];

  constructor(private router: Router,
    private lessonsService: AvailableLessonsService, 
    private bookLessonService: BookLessonService
    ){
      lessonsService.getLesson().subscribe(
        (response) => {
          console.log(response)
          _.map(response,(el)=>{
            this.lessons.push(el)
          })
        },
        (error) => {console.log(error)},
      )
    }

  ngOnInit() {
    this.items = [
      {label:'Homepage', routerLink :"/homepage-teacher"},
      {label:'Add lesson', routerLink : "/addlesson"},
    ];
  }

  delete(id: number) {
    this.bookLessonService.deleteLessonTeacher(id).subscribe(
      (response) => {
          console.log(response)
          alert("removed")
      },
      (error) => {
        alert("You don't have the permission")
        console.log(error)
      },
    )

  }

}