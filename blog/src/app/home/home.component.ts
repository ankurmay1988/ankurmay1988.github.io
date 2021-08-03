import { Component, OnInit } from '@angular/core';

type MonthYearType = {
  month: number;
  year: number;
};

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
    company: string;
    logo: string;
    technologies?: string[];
    timeline?: {
      position: string;
      from: MonthYearType;
      to?: MonthYearType;
      roleDescription: string[];
      location?: string;
    }[];
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
      careerSummary: 'To the best of my efforts.',
      workExperience: [
        {
          company: 'Nagarro',
          logo: 'assets/nagarro_logo_new.svg',
          technologies: [
            'Angular',
            '.NET Core',
            '.Net Framework',
            'ASP.NET MVC',
            'SQL Server',
            'Azure Cloud',
          ],
          timeline: [
            {
              position: 'Associate Technical Lead',
              roleDescription: [
                'NodeJS and Angular Applications',
                'Explored the glorious field of Data Science and Machine Learning !',
                'Heavy use of SPA architecture, Azure cloud infrastructure and Angular/Node.',
                'dotNET Core for function apps and critical cloud infrastructure.',
                'SQL Server 2016 and Azure SQL as backend.`',
              ],
              from: {
                month: 11,
                year: 2018,
              },
              location: 'Jaipur, Rajasthan, India',
            },
            {
              position: 'Senior Associate Technology',
              roleDescription: [
                'Worked in Education domain. Primarily for simulation and smart applications for students aged 8-12 years.',
                'Heavy use of SPA architecture, Azure cloud infrastructure and Angular/Node.',
                'dotNET Core for function apps and critical cloud infrastructure.',
                'SQL Server 2016 and Azure SQL as backend.',
              ],
              from: {
                month: 9,
                year: 2017,
              },
              to: { month: 10, year: 2018 },
              location: 'Jaipur, Rajasthan, India',
            },
            {
              position: 'Technical Associate',
              roleDescription: [
                'Worked in Manufacturing domain. Six sigma quality protocol and SPC (Statistical Process Control) software development.',
                'SPA ( Single Page Applications ) and Azure cloud infrastructure.',
                'Technologies Used: ASP.Net 4.5, Angular 2, NodeJS, Javascript, Backbone.JS, D3JS, HTML5, CSS3, WebAPI 2, SQL Server 2014',
              ],
              from: {
                month: 4,
                year: 2016,
              },
              to: {
                month: 9,
                year: 2017,
              },
              location: 'Jaipur, Rajasthan, India',
            },
          ],
        },
        {
          company: 'A3Logics',
          logo: 'assets/a3logics_logo.png',
          technologies: ['.Net Framework', 'ASP.NET MVC', 'SQL Server'],
          timeline: [
            {
              position: 'Software Engineer',
              roleDescription: [
                'Worked in Health Insurance domain. US Taxation and US Health insurance policies.',
                'X12 EDI file development (EDI 834, 837).',
                'HR Management System Software',
              ],
              location: 'Jaipur, Rajasthan, India',
              from: { month: 8, year: 2013 },
              to: { month: 4, year: 2016 },
            },
          ],
        },
      ],
      skills: [],
    };
  }

  ngOnInit(): void {}
}
