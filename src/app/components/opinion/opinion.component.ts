import { Component, Input, OnInit } from '@angular/core';

export interface OpinionData {
  name: string;
  surname: string;
  img: string;
  company: string;
  rating: number;
  opinion: string;
}

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss'],
})
export class OpinionComponent implements OnInit {
  @Input() data!: OpinionData;

  starsArray: ('full' | 'half' | 'empty')[] = [];

  ngOnInit(): void {
    const fullStars = Math.floor(this.data.rating);
    const halfStar = this.data.rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    this.starsArray = Array(fullStars)
      .fill('full')
      .concat(halfStar ? ['half'] : [])
      .concat(Array(emptyStars).fill('empty'));
  }
}
