import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dress-code',
  standalone: true,
  imports: [],
  templateUrl: './dress-code.component.html',
})
export class DressCodeComponent {
  readonly title = signal('Dress Code');
  readonly subtitle = signal('Formal y elegante, porque la ocasión lo amerita.');
}
