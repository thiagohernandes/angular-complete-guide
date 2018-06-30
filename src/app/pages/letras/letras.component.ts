import { Component, OnInit, NgModule, Input } from '@angular/core';
import { LetrasService } from '../../services/letras.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngModule
import { ObjLetra } from '../../interfaces/obj';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit {

  _letras: string[] = [];

  obj: ObjLetra = {letra: null};

  constructor(private arrLetras: LetrasService) { }

  ngOnInit() {
    console.log(this.arrLetras._letras);
    this._letras = this.arrLetras._letras;
  }

  addLetras(letra) {
    this.arrLetras.addLetra(letra);
    this._letras = this.arrLetras._letras;
  }

}
