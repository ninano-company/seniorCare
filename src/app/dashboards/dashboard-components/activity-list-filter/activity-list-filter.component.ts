import { Component, OnInit } from '@angular/core';
import { ACTIVITYFILTER } from '../../class/filter';

@Component({
  selector: 'app-activity-list-filter',
  templateUrl: './activity-list-filter.component.html',
  styleUrls: ['./activity-list-filter.component.css']
})
export class ActivityListFilterComponent implements OnInit {

  activityFilter = ACTIVITYFILTER;

  constructor() { }

  ngOnInit(): void {
  }

}
