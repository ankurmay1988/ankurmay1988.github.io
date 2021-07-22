import { Component, OnInit } from '@angular/core';

type CVData = {
  name: String;
  profile: String;
  email: string;
  mobile: string;
  picture: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cvdata!: CVData;
  constructor() {
    this.cvdata = {
      name: 'Ankur Mathur',
      email: 'ankurakaet@gmail.com',
      mobile: '+91 9887863958',
      profile: 'Full-Stack Developer (.Net)',
      picture: 'assets/ankur.jpg',
    };
  }

  ngOnInit(): void {}
}
