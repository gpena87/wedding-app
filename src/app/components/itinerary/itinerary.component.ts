import { Component, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-itinerary',
  imports: [RevealOnScrollDirective],
  templateUrl: './itinerary.component.html',
})
export class ItineraryComponent {
  title = signal('Itinerario');
  subtitle = signal('Organizate con tiempo para no perderte ningun momento especial.');
  events = signal([
    { title: 'Citación', time: '18:00 pm', image: 'bouquet.png' },
    { title: 'Ceremonia', time: '18:30 pm', image: 'rings.png' },
    { title: 'Cóctel', time: '19:10 pm', image: 'champagne.png' },
    { title: 'Cena', time: '20:30 pm', image: 'cake.png' },
    { title: 'Fiesta', time: '22:30 pm', image: 'microphone.png' },
    { title: 'A dormir', time: '2:30 am', image: 'car.png' },
  ]);
}