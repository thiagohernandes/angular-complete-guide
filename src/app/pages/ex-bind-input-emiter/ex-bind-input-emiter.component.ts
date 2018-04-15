import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPessoa } from '../../models/pessoa';

@Component({
  selector: 'app-ex-bind-input-emiter',
  templateUrl: './ex-bind-input-emiter.component.html',
  styleUrls: ['./ex-bind-input-emiter.component.css']
})
export class ExBindInputEmiterComponent implements OnInit {

  @Output() msgEmiter = new EventEmitter();
  @Output() objEmiter = new EventEmitter();

  msg:string;
  obj:Object = {msg:null};
  objPessoa:IPessoa = {codigo: null, nome: null};

  constructor() { }

  ngOnInit() {
  }

  msgRootComp(obj){ 
    this.msg = obj.msg;
    this.msgEmiter.emit(this.msg);
  }

  objAddEmiter(obj){ 
    this.objEmiter.emit(obj);
    this.msgRootComp(this.obj);
    this.objPessoa = {codigo: null, nome: null};
  }
}
