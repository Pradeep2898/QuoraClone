import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { SpaceComponent } from './space/space.component';
import { ProfileComponent } from './profile/profile.component';
import { AnswersComponent } from './answers/answers.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'notif', component:NotificationComponent},
  {path:'space', component:SpaceComponent},
  {path:'profile', component:ProfileComponent},
  {path:'answer', component:AnswersComponent},
  {path:'', redirectTo:'home', pathMatch:'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
