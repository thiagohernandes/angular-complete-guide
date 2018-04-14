import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-ex-ng-style',
  templateUrl: './ex-ng-style.component.html',
  styles: [`
    .meuStyle{
      color : blue
    }
  `]
 // styleUrls: ['./ex-ng-style.component.css']
})
export class ExNgStyleComponent implements OnInit {

  valor:number = null;
  numero:number = null;
  msg:string[] = ['Igual a 10','Menor que 10','Maior que 10','Selecione um número'];

  constructor() { }

  ngOnInit() {
    this.getColorByValor()
  }

  getColorByValor(){
      return this.valor != null ? this.valor == 10 ? 'black' : this.valor > 10 ? 'red' : 'gray' : 10;
  }

  changeNumber(numero){ 
    this.valor = numero != null ? numero : 0;
    this.numero = numero == null ? 0 : numero;
  }

  msgNumber(){
    if(this.numero != null){
      if(this.numero == 10){
        return this.msg[0];
      } else if(this.numero < 10){
          return this.msg[1];
      } else{
          return this.msg[2];
      }
    } else{
      return this.msg[3];
    }
   
  }

}
