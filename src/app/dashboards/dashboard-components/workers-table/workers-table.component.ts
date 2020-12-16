import { Component, OnInit } from '@angular/core';
import { WORKERS } from '../../class/workers';

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.css']
})
export class WorkersTableComponent implements OnInit {

  workers = WORKERS;

  constructor() { }

  ngOnInit(): void {
  }

}
