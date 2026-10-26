import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.component.html',
})
export class StartComponent {
  title = signal('Invitacion de boda');
  subtitle = signal('Ma. José\ny Gonzalo');
  subtitle2 = signal('Estamos emocionados de compartir este momento tan especial con ustedes. ¡Gracias por ser parte de nuestra historia!');
  subtitle3 = signal('Nuestra boda');
  subtitle4 = signal('Tenemos algo muy bonito que celebrar <br /> Y queremos hacerlo de las personas que forman parte de nuestra vida. Porque los momentos más importantes cobran sentido cuando podemos compartirlos con quienes queremos.');
  name1 = signal('MARÍA JOSÉ');
  name2 = signal('GONZALO ANDRÉS');
  lastName1 = signal('González Rodríguez');
  lastName2 = signal('Peña Gutierrez');
}
