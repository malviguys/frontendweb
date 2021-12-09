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

  constructor(
    private route: ActivatedRoute
  ){
    this.id=this.route.snapshot.params["id"];
  }

  ngOnInit() {
      
      this.items = [
          {label:'Homepage', routerLink :"/homepage"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }

}
