import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-fruit',
  imports: [],
  templateUrl: './singlefruit.html',
  styleUrl: './singlefruit.scss',
})
export class SingleFruit {
  getStarType(stars: number, count: number): 'half' | 'full' | 'empty' {
    if (stars >= count) return 'full';
    if (stars >= count - 0.5) return 'half';
    return 'empty';
  }

  @Input() fruit = {
    name: 'Apfel',
    img: 'apple.png',
    description:
      'Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.',
    genus: 'Kernobstgewächsen innerhalb der Familie der Rosengewächse',
    stars: 2.3,
    reviews: [
      { name: 'Kevin W.', text: 'ist lecker' },
      { name: 'Arne P.', text: 'nicht so meins' },
    ],
  };
  @Input() fruitNumber: number = 0;
}
