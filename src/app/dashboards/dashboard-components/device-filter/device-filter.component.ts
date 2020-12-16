import { Component, OnInit } from '@angular/core';
import { DEVICEFILTER } from '../../class/filter';

@Component({
  selector: 'app-device-filter',
  templateUrl: './device-filter.component.html',
  styleUrls: ['./device-filter.component.css']
})
export class DeviceFilterComponent implements OnInit {

  deviceFilters = DEVICEFILTER;

  constructor() { }

  ngOnInit(): void {
  }

}
