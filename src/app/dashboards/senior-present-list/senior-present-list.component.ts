import { Component, OnInit } from '@angular/core';
import { PRESENTLIST} from '../class/present';


@Component({
  selector: 'app-senior-present-list',
  templateUrl: './senior-present-list.component.html',
  styleUrls: ['./senior-present-list.component.css']
})
export class SeniorPresentListComponent implements OnInit {
  presents = PRESENTLIST;
  

  constructor() { }

  ngOnInit(): void {
  }

}
