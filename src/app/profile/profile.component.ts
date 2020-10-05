import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { Service } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  data: Profile;
  constructor(private service: Service) { }

  ngOnInit(): void {
    this.data=this.service.getProfileData();
  }
}
