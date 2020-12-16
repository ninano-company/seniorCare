import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from '../../class/activity';

@Component({
  selector: 'app-activity-photo-list',
  templateUrl: './activity-photo-list.component.html',
  styleUrls: ['./activity-photo-list.component.css']
})
export class ActivityPhotoListComponent implements OnInit {

  activities = ACTIVITIES;

  constructor() { }

  ngOnInit(): void {
  }

}
