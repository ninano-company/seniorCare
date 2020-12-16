import { Component, OnInit } from '@angular/core';
import { TASKFILTER } from '../../class/filter';

@Component({
  selector: 'app-tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.css']
})
export class TasksFilterComponent implements OnInit {

  taskFilter = TASKFILTER;

  constructor() { }

  ngOnInit(): void {
  }

}
