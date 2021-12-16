import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-homepage-teacher',
  templateUrl: './homepage-teacher.component.html',
  styleUrls: ['./homepage-teacher.component.css']
})
export class HomepageTeacherComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Homepage', routerLink :"/homepage-teacher"},
      {label:'Add lesson', routerLink : "/addlesson"},
  ];
  }

}
