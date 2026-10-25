import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  title = signal('Gracias por acompañarnos');
  subtitle1 = signal('El amor es nuestra promesa y ustedes son el testimonio de nuestra felicidad.');
  subtitle2 = signal('Con cariño,');
  subtitle3 = signal('MJ & G');
  subtitle4 = signal('Nos casamos · 2027');
}
