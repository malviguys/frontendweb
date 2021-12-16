import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookLessonService {

constructor( private http: HttpClient) { }

bookLesson(booking: any) {
  console.log(booking)
  return this.http.post("http://localhost:8000/api/v1/booking/", booking,{headers:{'Content-Type': 'application/json', 'Authorization': 'token '+localStorage.getItem('token')}},);
}

addLesson(lesson: any) {
  console.log(lesson)
  return this.http.post("http://localhost:8000/api/v1/lessons/", lesson,{headers:{'Content-Type': 'application/json', 'Authorization': 'token '+localStorage.getItem('token')}},);
}

getBookedLesson() {
  return this.http.get("http://localhost:8000/api/v1/booking/",{headers:{'Authorization': 'token '+localStorage.getItem('token')}},);
}

deleteLesson(id: number) {
  return this.http.delete("http://localhost:8000/api/v1/booking/"+id,{headers:{'Authorization': 'token '+localStorage.getItem('token')}},);
}

deleteLessonTeacher(id: number) {
  return this.http.delete("http://localhost:8000/api/v1/lessons/"+id,{headers:{'Authorization': 'token '+localStorage.getItem('token')}},);
}

}
