import { Component, OnInit } from '@angular/core';
import { CCTVS } from '../../class/cctvs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cctvs = CCTVS;

  constructor() { }

  ngOnInit(): void {
  }

}
