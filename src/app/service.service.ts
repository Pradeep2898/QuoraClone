import { Injectable } from '@angular/core';
import { Home } from './home/home';
import { HomeData } from './home/home-data';
import { Answers } from './answers/answers';
import { AnswersData } from './answers/answers-data';
import { Profile } from './profile/profile';
import { ProfileData } from './profile/profile-data';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor() { }
  
  getHomeData(): Home[]{
    return HomeData;
  }
  
  getAnswersData(): Answers[]{
    return AnswersData;
  }
  
  getProfileData(): Profile{
    return ProfileData;
  }
}
