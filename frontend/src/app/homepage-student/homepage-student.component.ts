import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AvailableLessonsService } from '../available-lessons.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-student',
  templateUrl: './homepage-student.component.html',
  styleUrls: ['./homepage-student.component.css']
})
export class HomepageStudentComponent implements OnInit {
  items: MenuItem[] = [];
  lessons: any[] = [];
  

  constructor(
    private router: Router,
    private lessonsService: AvailableLessonsService
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
          {label:'Homepage', routerLink :"/homepage-student"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }
  
  link(id: number) {
    this.router.navigate(['/lesson', id])
  }

}