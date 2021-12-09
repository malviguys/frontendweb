import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items: MenuItem[] = [];
  lessons: any[] = [];
  

  constructor( ){
    for(let i=0; i<3; i++){
      this.lessons.push({
        link: "/lesson/"+i,
        lessonId: i,
        lessonName: "Guitar lesson"+i,
        lessonInstrument: "Guitar",
        lessonTeacher: "Paola",
        lessonDate: new Date("09/12/2021"),
        lessonCost: 10.0
      })
    }
  }

  ngOnInit() {
      this.items = [
          {label:'Homepage', routerLink :"/homepage"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }
  
}
