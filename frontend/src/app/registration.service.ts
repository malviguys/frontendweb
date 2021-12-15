import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private httpClient: HttpClient) {}

  register(firstname: string, lastname: string, username: string, password: string, userType: boolean): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = {
      firstname,
      lastname,
      username,
      password
    };
    console.log(body);
      return this.httpClient.post(`${environment.API_URL}/users/register`, body ,{
      headers,
    });
  }
}