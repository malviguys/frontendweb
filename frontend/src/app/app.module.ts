import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LessonComponent } from './lesson/lesson.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [					
    AppComponent,
      LoginComponent,
      RegistrationComponent,
      WelcomePageComponent,
      LessonComponent,
      HomepageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
