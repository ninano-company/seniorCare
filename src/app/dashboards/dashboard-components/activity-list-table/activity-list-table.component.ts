import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from '../../class/activity';

@Component({
  selector: 'app-activity-list-table',
  templateUrl: './activity-list-table.component.html',
  styleUrls: ['./activity-list-table.component.css']
})
export class ActivityListTableComponent implements OnInit {

  activities = ACTIVITIES;

  constructor() { }

  ngOnInit(): void {
  }

}
