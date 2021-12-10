import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private authService: AuthService) {}

  username: string = '';
  password: string = '';

  isAuthenticated: boolean = false;

  ngOnInit(): void {}

  login() {
    console.log('username: ' + this.username + ' password: ' + this.password);
    this.authService.authenticate(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem('user', this.username);
        this.isAuthenticated = true;
        this.route.navigate(['homepage']);
      },
      (error) => {
        console.log(error);
        console.log('not authenticated');
        this.isAuthenticated = false;
        alert("login failed");
      }
    );
  }
}
