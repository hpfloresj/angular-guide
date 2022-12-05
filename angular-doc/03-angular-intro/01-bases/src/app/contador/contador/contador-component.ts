import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `<h1> {{ title }} </h1>
  <h3>La base es {{base}}</h3>

  <button (click)="acumular(this.base)">+{{base}}</button>

  <span>{{numero}}</span>

  <button (click)="acumular(-this.base)">-{{base}}</button>
  `
})
export class ContadorComponent
{
  title = 'Hola Mundo';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number): void {
    this.numero += valor;
  }
}
