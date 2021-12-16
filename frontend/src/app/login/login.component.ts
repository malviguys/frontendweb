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
  private data: any = [];

  isAuthenticated: boolean = false;
  ngOnInit() {
   
  }


  login() {
    console.log('username: ' + this.username + ' password: ' + this.password);
    this.authService.authenticate(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem('user', this.username);
        this.isAuthenticated = true;
        console.log(response);
        localStorage.setItem('username', this.username)
        localStorage.setItem('token', response.key)
        this.authService.userId().subscribe( 
          (response) => {
            this.data=response
            localStorage.setItem('userId', this.data.pk)
            if(this.data.pk){
              this.authService.userProfile(this.data.pk)
            }
          }
        )
        //if()
        this.route.navigate(['homepage-student']);
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
