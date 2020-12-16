import { Component, OnInit } from '@angular/core';
import { PRESENTLIST} from '../../class/present';
@Component({
  selector: 'app-present-table',
  templateUrl: './present-table.component.html',
  styleUrls: ['./present-table.component.css']
})
export class PresentTableComponent implements OnInit {
  presents = PRESENTLIST;
  constructor() { }

  ngOnInit(): void {
  }

}
