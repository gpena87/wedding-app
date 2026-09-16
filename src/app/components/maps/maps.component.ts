import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-maps',
  imports: [],
  templateUrl: './maps.component.html',
})
export class MapsComponent {
  title = signal('Ceremonia');
  addressDetail = signal('Av. la Compañía s/n esq. Las Delicias\nCodegua, Rancagua — VI Región');
  addressDescription = signal('Casona Las Delicias');
  addressLink = signal('https://maps.app.goo.gl/7MauQC4rtDqfdtmk8');
}
