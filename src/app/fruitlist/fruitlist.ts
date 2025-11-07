import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingleFruit } from './singlefruit/singlefruit';
import { Fruitlistdata } from '../fruitlistdata';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SingleFruit],
  templateUrl: './fruitlist.html',
  styleUrl: './fruitlist.scss',
})
export class Fruitlist {
  fruitlistdata = inject(Fruitlistdata);

  getRatingColor(stars: number): string {
    return stars > 3 ? 'green' : 'red';
  }

  getStarClass(stars: number): { fontColorBad: boolean; fontColorGood: boolean } {
    // return stars < 3 ? 'fontColorBad' : 'fontColorGood';
    return {
      fontColorBad: stars < 3,
      fontColorGood: stars >= 3,
    };
  }

  addComment(comment: string, index: number) {
    if (!comment) return;
    this.fruitlistdata.addComment(comment, index);
  }
}
