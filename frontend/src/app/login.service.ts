import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient:HttpClient
  ) { }

  login(username: string, password: string): Observable<Boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let params = new HttpParams();
      params = params.set('username', username);
      params = params.set('password', password);
            
      return this.httpClient.get<Boolean>(`${environment.API_URL}/login`, {params});
      //this return is a problem
  }
}
