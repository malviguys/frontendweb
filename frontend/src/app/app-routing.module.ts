import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LessonComponent } from './lesson/lesson.component';
import { HomepageStudentComponent } from './homepage-student/homepage-student.component';
import { HomepageTeacherComponent } from './homepage-teacher/homepage-teacher.component';
import { LessonsbookedComponent } from './lessonsbooked/lessonsbooked.component';
import { AddlessonComponent } from './addlesson/addlesson.component';


const routes: Routes = [
  {path:'', component : WelcomePageComponent},
  {path:'registration', component : RegistrationComponent},
  {path:'login', component : LoginComponent},
  {path:'lesson/:id', component : LessonComponent},
  {path:'homepage-student', component: HomepageStudentComponent},
  {path:'homepage-teacher', component: HomepageTeacherComponent},
  {path:'lessonsbooked', component: LessonsbookedComponent},
  {path:'addlesson', component: AddlessonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
