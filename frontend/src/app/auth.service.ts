import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private loginService: LoginService) {}

  authenticate = (username: string, password: string) => {
    console.log(
      '[AUTH SERVICE] username: ' + username + ' password: ' + password
    );
    return this.loginService.login(username, password);
  };

  loggedUser = () => {
    let user = sessionStorage.getItem('user');
    return user;
  };

  isLogged = () => (sessionStorage.getItem('user') != null ? true : false);

  clearAll = () => sessionStorage.removeItem('user');

  userId = () => this.loginService.getUserId();

  userProfile = (userId: any) => this.loginService.getUserProfile(userId)
  
}
