import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe-component',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Ironman';

  get nombreCapitalizable(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Otro nombre';
  }

}
