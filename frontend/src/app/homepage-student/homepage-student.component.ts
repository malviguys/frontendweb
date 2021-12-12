import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-homepage-student',
  templateUrl: './homepage-student.component.html',
  styleUrls: ['./homepage-student.component.css']
})
export class HomepageStudentComponent implements OnInit {
  items: MenuItem[] = [];
  lessons: any[] = [];
  

  constructor( ){
    for(let i=0; i<3; i++){
      this.lessons.push({
        link: "/lesson/"+i,
        id: i,
        name: "Guitar lesson"+i,
      })
    }
  }

  ngOnInit() {
      this.items = [
          {label:'Homepage', routerLink :"/homepage-student"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }
  
}
