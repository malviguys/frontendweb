import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LessonComponent } from './lesson/lesson.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'', component : WelcomePageComponent},
  {path:'registration', component : RegistrationComponent},
  {path:'login', component : LoginComponent},
  {path:'lesson', component : LessonComponent},
  {path:'homepage', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
