import { Component, OnInit } from '@angular/core';
import { DIETARYS} from '../class/dietary';
@Component({
  selector: 'app-dietary',
  templateUrl: './dietary.component.html',
  styleUrls: ['./dietary.component.css']
})
export class DietaryComponent implements OnInit {
  dietarys = DIETARYS;
  constructor() { }
  
  ngOnInit(): void {
  }

}
