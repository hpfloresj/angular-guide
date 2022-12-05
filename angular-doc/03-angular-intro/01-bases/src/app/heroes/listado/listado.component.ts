import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman'];
  heroe: string = '';

  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
  }

  borrarHereo(): void {
    this.heroe = this.heroes.shift() || '';
  }

}
