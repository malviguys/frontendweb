import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit() {
      this.items = [
          {label:'Homepage', routerLink :"/homepage"},
          {label:'My lessons', routerLink : "/lessonsbooked"},
      ];
  }
  
}
