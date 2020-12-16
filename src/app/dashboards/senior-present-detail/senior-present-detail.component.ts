import { Component, OnInit } from '@angular/core';
import { USERS } from '../class/users';
@Component({
  selector: 'app-senior-present-detail',
  templateUrl: './senior-present-detail.component.html',
  styleUrls: ['./senior-present-detail.component.css']
})
export class SeniorPresentDetailComponent implements OnInit {
  users = USERS;
  constructor() { }

  ngOnInit(): void {
  }

}
