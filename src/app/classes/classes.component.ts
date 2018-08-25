import { Funcoes } from './funcoes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const funcoes = new Funcoes('Teste', 'Interessante');
    funcoes.fcnInicializando();
  }

}
