import { Injectable } from '@angular/core';
import { IPessoa } from '../models/pessoa';

@Injectable()
export class ExPessoaService {

  listaPessoas:IPessoa[] = [];

  constructor() { }

  getListaPessoas(){
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
    return this.listaPessoas;
  }

  addPessoa(obj){ 
      this.listaPessoas[this.listaPessoas.length-1] = obj;
      console.log(this.listaPessoas);
  }


}
