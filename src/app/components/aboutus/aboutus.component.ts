import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent {
  team: any[] = [
    {
      name: 'Micheal',
      image: './assets/team/member.jpg',
      gender: 'male',
    },
    {
      name: 'Thomas',
      image: './assets/team/miky.jpeg',
      gender: 'male',
    },
    {
      name: 'Miky',
      image: './assets/team/member.jpg',
      gender: 'male',
    },
    {
      name: 'Herr Müller',
      image: './assets/team/miky.jpeg',
      gender: 'male',
    },

    {
      name: 'Meranda',
      image: './assets/team/member.jpg',
      gender: 'female',
    },

    {
      name: 'Amily',
      image: './assets/team/miky.jpeg',
      gender: 'female',
    },
    {
      name: 'Emma',
      image: './assets/team/member.jpg',
      gender: 'female',
    },
    {
      name: 'Tonny',
      image: './assets/team/miky.jpeg',
      gender: 'male',
    },
  ];
}
