import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LessonComponent } from './lesson/lesson.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LessonsbookedComponent } from './lessonsbooked/lessonsbooked.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      RegistrationComponent,
      WelcomePageComponent,
      LessonComponent,
      HomepageComponent,
      LessonsbookedComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    BreadcrumbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
