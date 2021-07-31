import { Component, OnInit } from '@angular/core';

type CVData = {
  name: String;
  profile: String;
  email: string;
  mobile: string;
  picture: string;
  linkedIn?: string;
  github?: string;
  website?: string;
  careerSummary: string;
  workExperience: {
    position: string;
    company: string;
    year1: string;
    year2: string;
    roleDescription: string;
    technologies?: string[];
  }[];
  skills?: {
    name: string;
    rating: number;
    category?: string;
  }[];
  education?: {
    degree: string;
    university: string;
    percentile: string;
    year1: string;
    year2: string;
  }[];
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
      github: 'https://www.github.com/ankurmay1988',
      linkedIn: 'https://www.linkedin.com/in/ankur-mathur-07299274/',
      website: 'https://www.ankurmathur.in/',
      careerSummary: '',
      workExperience: [
        {
          company: 'Nagarro',
        },
      ],
      skills: [],
    };
  }

  ngOnInit(): void {}
}
