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
  return this.http.get("http://localhost:8000/api/v1/lessons/", {headers:{'Authorization': 'token '+localStorage.getItem('token')}});
}

getLessonOfIndex(id: any) {
  return this.http.get("http://localhost:8000/api/v1/lessons/"+id, {headers:{'Authorization': 'token '+localStorage.getItem('token')}});
}

}
