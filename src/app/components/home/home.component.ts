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
      id: 'id1',
      img: 'assets/img/elon_musk.jpg',
      rating: 4.5,
    },
    {
      id: 'id2',
      img: 'assets/img/taylor_swift.jpg',
      rating: 5,
    },
    {
      id: 'id3',
      img: 'assets/img/hammurabi.jpg',
      rating: 4,
    },
  ];
}
