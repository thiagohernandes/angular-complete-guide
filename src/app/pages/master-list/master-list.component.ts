import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent implements OnInit {

   listaTimes:Object[] =[ 
      {
        codigo: 1,
        nome: "Santos"
      },
      {
        codigo: 2,
        nome: "São Paulo"
      },
      {
        codigo: 3,
        nome: "Palmeiras"
      },
      {
        codigo: 4,
        nome: "Fluminense"
      }
  ]

  constructor() { }

  ngOnInit() {
  }

}
