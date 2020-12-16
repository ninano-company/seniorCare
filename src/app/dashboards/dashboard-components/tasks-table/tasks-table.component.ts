import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../class/tasks'

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
