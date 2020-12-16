import { Component, OnInit } from '@angular/core';
import { WORKERFILTER } from '../../class/filter';

@Component({
  selector: 'app-workers-filter',
  templateUrl: './workers-filter.component.html',
  styleUrls: ['./workers-filter.component.css']
})
export class WorkersFilterComponent implements OnInit {

  workersFilter = WORKERFILTER;

  constructor() { }

  ngOnInit(): void {
  }

}
