import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private route: Router,
    //private authService: AuthService
  ) { }

  username: string = "";
  password: string = "";

  isAuthenticated: boolean = false;

  ngOnInit(): void {
  }

  login() {
    if(this.username === "giada" && this.password === "giada") {
      this.isAuthenticated = true;
      this.route.navigate(['homepage',])
    }
    else {
      alert("login failed");
      this.isAuthenticated = false;
    }
    /*this.authService.authenticate(this.username, this.password).subscribe(
      response => {

        if (response == true) {
          sessionStorage.setItem("user", this.username);
          this.isAuthenticated = true;
          this.route.navigate(['main', this.username]);
        }
        else {
          this.isAuthenticated = false;
        }
      }
    )
    */
  }

}