import { Component, OnInit } from '@angular/core';
import { Answers } from './answers';
import { Service } from '../service.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  data: Answers[];
  constructor(private service: Service ) { }

  ngOnInit(): void {
    this.data=this.service.getAnswersData();
  }

}
