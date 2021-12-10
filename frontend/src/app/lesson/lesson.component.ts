import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  items: MenuItem[] = [];
  id: number;
  name: string;
  instrument: string;
  teacher: string;
  date: Date;
  duration: number;
  cost: number;

  constructor(
    private route: ActivatedRoute
  ){
    this.id=this.route.snapshot.params["id"];
    this.name= "Lesson"+this.id;
    this.instrument="Guitar";
    this.teacher="Paola";
    this.date=new Date("09/12/2021");
    this.duration=1;
    this.cost=10.0;
  }

  ngOnInit() {
      
      this.items = [
          {label:'Homepage', routerLink :"/homepage"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }

}
