import { Component, OnInit } from '@angular/core';
import { PRESENTLIST} from '../class/present';
import {USERS} from '../class/users';
@Component({
  selector: 'app-senior-present-detail',
  templateUrl: './senior-present-detail.component.html',
  styleUrls: ['./senior-present-detail.component.css']
})
export class SeniorPresentDetailComponent implements OnInit {
  presents = PRESENTLIST;
  User = USERS;
  constructor() { }

  ngOnInit(): void {
  }

}
