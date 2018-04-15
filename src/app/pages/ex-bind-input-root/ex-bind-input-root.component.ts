import { Component, OnInit, Input, Output} from '@angular/core';
import { IPessoa } from '../../models/pessoa';
import { ExPessoaService } from '../../services/ex-pessoa.service';
import { NgModel } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ex-bind-input-root',
  templateUrl: './ex-bind-input-root.component.html',
  styleUrls: ['./ex-bind-input-root.component.css']
})
export class ExBindInputRootComponent implements OnInit {

  listaPessoas:IPessoa[] = [];
  pessoaObject:IPessoa = {codigo:null,nome:null};
  msgEmiter:string; // mesmo nome e tipo do component @Output emiter
  objEmiter:IPessoa;  // mesmo nome e tipo do component @Output emiter

  constructor(private servicePessoa:ExPessoaService) { }

  ngOnInit() {
    this.getListaPessoas();
  }

  addPessoa(obj){
    this.servicePessoa.addPessoa(obj);
    this.pessoaObject = {codigo:null,nome:null};
  }

  getEmiterChild(msg){
      this.msgEmiter = msg;
  }

  getEmiterChildObj(obj){
    this.objEmiter = obj;
  }

  getListaPessoas(){
      this.listaPessoas = this.servicePessoa.getListaPessoas();
  }


}
