import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users : SelectItem[] = [{ label: "Teacher", value: null },
  { label: "Student", value: 1 }];
  selectedUser: SelectItem | undefined;

  constructor(
    private route: Router,
    private authService: AuthService

  ) { }

  firstname: string = '';
  lastname: string = '';
  username: string = '';
  password: string = '';

  ngOnInit() {
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2842330.jpg')";
  }

  signUp() {
    alert("here");
  }

}
