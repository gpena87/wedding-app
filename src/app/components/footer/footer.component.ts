import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  title = signal('Gracias por acompañarnos');
  subtitle1 = signal('De todos los caminos que pudimos tomar, qué bonito que el destino nos haya llevado hasta el mismo altar.');
  subtitle2 = signal('Con cariño,');
  subtitle3 = signal('MJ & G');
  subtitle4 = signal('Nos casamos · 2027');
}
