import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-addlesson',
  templateUrl: './addlesson.component.html',
  styleUrls: ['./addlesson.component.css']
})
export class AddlessonComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Homepage', routerLink :"/homepage-teacher"},
      {label:'Add lesson', routerLink : "/addlesson"},
  ];
  }

}
