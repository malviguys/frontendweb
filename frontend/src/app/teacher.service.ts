import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }
  getLessonList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/lesson/');
  }

   addLesson(val:any){
  return this.http.post(this.APIUrl+'/lesson/',val);
  }

  updateLesson(val:any){
  return this.http.put(this.APIUrl+'/lesson/',val);
  }
   deleteLesson(val:any){
  return this.http.delete(this.APIUrl+'/lesson/'+val);
  }
   getAllLessonList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/lesson/');
  }
}

