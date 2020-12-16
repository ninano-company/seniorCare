import { Component, OnInit } from '@angular/core';
import { ACTIVITYPHOTOFILTER } from '../../class/filter'

@Component({
  selector: 'app-activity-photo-filter',
  templateUrl: './activity-photo-filter.component.html',
  styleUrls: ['./activity-photo-filter.component.css']
})
export class ActivityPhotoFilterComponent implements OnInit {

  activityPhotoFilter = ACTIVITYPHOTOFILTER;

  constructor() { }

  ngOnInit(): void {
  }

}
