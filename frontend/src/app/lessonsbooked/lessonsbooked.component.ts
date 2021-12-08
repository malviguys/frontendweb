import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-lessonsbooked',
  templateUrl: './lessonsbooked.component.html',
  styleUrls: ['./lessonsbooked.component.css']
})
export class LessonsbookedComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit() {
      this.items = [
          {label:'Homepage', routerLink :"/homepage"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }
}
