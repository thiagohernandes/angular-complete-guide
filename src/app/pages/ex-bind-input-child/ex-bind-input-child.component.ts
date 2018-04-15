import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPessoa } from '../../models/pessoa';
import { NgModel } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ex-bind-input-child',
  templateUrl: './ex-bind-input-child.component.html',
  styleUrls: ['./ex-bind-input-child.component.css']
})
export class ExBindInputChildComponent implements OnInit {

  @Input('alias') inputPessoa: {id:number, nome:string};

  constructor() { }

  ngOnInit() {
  }

 

}
