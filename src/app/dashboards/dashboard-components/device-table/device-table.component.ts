import { Component, OnInit } from '@angular/core';
import { ROBOTS } from '../../class/robot';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.css']
})
export class DeviceTableComponent implements OnInit {

  robots = ROBOTS;

  constructor() { }

  ngOnInit(): void {
  }

}
