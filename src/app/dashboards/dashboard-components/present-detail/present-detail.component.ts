import { Component, OnInit } from '@angular/core';
import { PRESENTLIST} from '../../class/present';
import {USERS} from '../../class/users';
@Component({
  selector: 'app-present-detail',
  templateUrl: './present-detail.component.html',
  styleUrls: ['./present-detail.component.css']
})
export class PresentDetailComponent implements OnInit {
  presents = PRESENTLIST;
  User = USERS;
  constructor() { }

  ngOnInit(): void {
  }

}
