import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  @Input('times') times:Object[];

  constructor() { }

  ngOnInit() {
  }

}
