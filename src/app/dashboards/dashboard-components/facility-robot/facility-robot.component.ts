import { Component, OnInit } from '@angular/core';
import { ROBOTS } from '../../class/robot';

@Component({
  selector: 'app-facility-robot',
  templateUrl: './facility-robot.component.html',
  styleUrls: ['./facility-robot.component.css']
})
export class FacilityRobotComponent implements OnInit {

  robots = ROBOTS;

  constructor() { }

  ngOnInit(): void {
  }

}
