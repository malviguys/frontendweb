import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2842330.jpg')";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "no-repeat"
  }

}
