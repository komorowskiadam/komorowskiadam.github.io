import { Component } from '@angular/core';
import { OpinionData } from '../opinion/opinion.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  opinions: OpinionData[] = [
    {
      name: 'Elon',
      surname: 'Musk',
      img: 'assets/img/elon_musk.jpg',
      company: 'Tesla',
      rating: 4.5,
      opinion: 'Awesome page!!!',
    },
    {
      name: 'Taylor',
      surname: 'Swift',
      img: 'assets/img/taylor_swift.jpg',
      company: 'Singer',
      rating: 5,
      opinion: 'OMG this page is so cuuute!',
    },
    {
      name: 'Hammurabi',
      surname: '',
      img: 'assets/img/hammurabi.jpg',
      company: 'CEO of Babylon',
      rating: 4,
      opinion:
        'Dear Adam, this site pleases my eyes like an oasis in the desert. however, the site does not display correctly on clay tablets.',
    },
  ];
}
