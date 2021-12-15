import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {SelectItem} from 'primeng/api';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  users : SelectItem[] = [{ label: "Teacher", value: 0 },
  { label: "Student", value: 1 }];
  selectedUser: SelectItem | undefined;

  constructor(
    private route: Router, 
    private authService: AuthService,
    private registrationService: RegistrationService
      
  ) { }

  firstname: string = '';
  lastname: string = '';
  username: string = '';
  password: string = '';
  userType: boolean = true;

  ngOnInit() {}

  signUp() {
    //se il tipo è teacher va fatto l'add nel Teacher esempio
    this.registrationService.register(this.firstname, this.lastname, this.username, this.password,this.userType);
  }

}
