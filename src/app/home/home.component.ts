import { Component, OnInit } from '@angular/core';
import { Home } from './home';
import { Service } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Home[];
  constructor(private service: Service) { }

  ngOnInit(): void {
    this.data=this.service.getHomeData();
  }

}
