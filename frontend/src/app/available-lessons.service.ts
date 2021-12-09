import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AvailableLessonsService {

constructor(
  private http: HttpClient
) { }

getLesson() {
  //return this.http.get()
  
}

}
