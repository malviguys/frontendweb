import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LessonComponent } from './lesson/lesson.component';
import { HomepageStudentComponent } from './homepage-student/homepage-student.component';
import { LessonsbookedComponent } from './lessonsbooked/lessonsbooked.component';
import { AddlessonComponent } from './addlesson/addlesson.component';
import { HomepageTeacherComponent } from './homepage-teacher/homepage-teacher.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent,
      WelcomePageComponent,
      LessonComponent,
      HomepageStudentComponent,
      HomepageTeacherComponent,
      LessonsbookedComponent,
      AddlessonComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    BreadcrumbModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
