import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LetrasService {

  _letras:string[] = [];

  constructor() { }

  addLetra(letra){
    this._letras.push(letra);
  }
}
