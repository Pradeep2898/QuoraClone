import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { SpaceComponent } from './space/space.component';
import { ProfileComponent } from './profile/profile.component';
import { AnswersComponent } from './answers/answers.component';
import { Service } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationComponent,
    SpaceComponent,
    ProfileComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
