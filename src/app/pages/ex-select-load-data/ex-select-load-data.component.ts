import { Component, OnInit } from '@angular/core';
import { IPessoa } from '../../models/pessoa';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ex-select-load-data',
  templateUrl: './ex-select-load-data.component.html',
 // styleUrls: ['./ex-select-load-data.component.css']
})
export class ExSelectLoadDataComponent implements OnInit {

  listaPessoas:IPessoa[] = [];
  currentPessoa:IPessoa;

  constructor() {
    
   }

  ngOnInit() {
    this.montarLista();
  }

  montarLista(){
    let pessoa1 = {
      codigo: 1,
      nome:'Fulano'
    }
    let pessoa2 = {
      codigo: 2,
      nome:'Beltrano'
    }
    let pessoa3 = {
      codigo: 3,
      nome:'Ciclano'
    }
    let pessoa4 = {
      codigo: 4,
      nome:'Delano'
    }
    let pessoa5 = {
      codigo: 5,
      nome:'Filisbino'
    }
    this.listaPessoas[0] = pessoa1;
    this.listaPessoas[1] = pessoa2;
    this.listaPessoas[2] = pessoa3;
    this.listaPessoas[3] = pessoa4;
    this.listaPessoas[4] = pessoa5;
  }

  updatePessoa(obj){
    console.log(obj);
  }

  changeValorSelect(){
    this.currentPessoa = this.listaPessoas[2];
  }

}
