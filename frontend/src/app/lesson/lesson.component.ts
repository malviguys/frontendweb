import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { AvailableLessonsService } from '../available-lessons.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  items: MenuItem[] = [];
  lesson : any = {
    "name" : "",
    "instrument" : "",
    "teacher" : "",
    "date" : "",
    "duration" : "",
    "cost" : ""
  };
  id: number;


  constructor(
    private route: ActivatedRoute,
    private lessonsService: AvailableLessonsService
  ){
    let id=this.route.snapshot.paramMap.get("id");
    this.lessonsService.getLessonOfIndex(id).subscribe(
      (response) => {
          this.lesson=response;
    },
      (error) => {console.log(error)},
    )
    this.id=this.route.snapshot.params["id"];
  }

  ngOnInit() {
      
      this.items = [
          {label:'Homepage', routerLink :"/homepage-student"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }

}
