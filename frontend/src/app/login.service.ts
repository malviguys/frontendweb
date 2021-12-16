import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = {
      username,
      password,
    };
    console.log(body);
    return this.httpClient.post(`${environment.API_URL}/auth/login/`, body, {
      headers,
    });
  }

  getUserId() {
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'token '+localStorage.getItem('token')};
    return this.httpClient.get(`${environment.API_URL}/auth/user`, {headers: headers});
  }

  getUserProfile(id: any) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'token '+localStorage.getItem('token')};
    return this.httpClient.get(`${environment.API_URL}/student/${id}`, {headers: headers}).subscribe(
      (response) => {
        localStorage.setItem('studentProfile', response.toString())
        localStorage.setItem('isStudent', "true")
        console.log(response)
      }, (error) => {
        console.log(error)
        this.httpClient.get(`${environment.API_URL}/teacher/${id}`, {headers: headers}).subscribe(
          (response) => {
            localStorage.setItem('teacherProfile', response.toString())
            localStorage.setItem('isStudent', "false")
            console.log(response)
          }, (error) => {
            console.log("User not found")
          }
        );
      }
    );
   }
}