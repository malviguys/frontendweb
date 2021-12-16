import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BookLessonService } from '../booklesson.service';

@Component({
  selector: 'app-addlesson',
  templateUrl: './addlesson.component.html',
  styleUrls: ['./addlesson.component.css']
})
export class AddlessonComponent implements OnInit {
  items: MenuItem[] = [];
  lesson : any = {
    "name" : "",
    "instrument" : "",
    "teacher" : "",
    "date_time" : "",
    "duration" : "",
    "cost" : ""
  };

  constructor(private bookLessonService: BookLessonService) { }

  ngOnInit() {
    this.items = [
      {label:'Homepage', routerLink :"/homepage-teacher"},
      {label:'Add lesson', routerLink : "/addlesson"},
  ];
  }

  add() {
    let teacherId = localStorage.getItem("teacherProfile")
    if(teacherId != null){
      this.lesson.teacher = JSON.parse(teacherId)
      this.lesson.date_time = this.lesson.date_time.replace(", ", "T")
      this.lesson.instrument={
        "id": 1
      }
      this.bookLessonService.addLesson(this.lesson).subscribe(
        (response) => {
          console.log(response)
          
        }, (error) => {
          console.log(error)
        }
      );
    }
  }

}
