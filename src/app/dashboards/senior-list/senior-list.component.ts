import { Component, OnInit } from '@angular/core';4
import { USERS } from '../class/users';

@Component({
  selector: 'app-senior-list',
  templateUrl: './senior-list.component.html',
  styleUrls: ['./senior-list.component.css']
})
export class SeniorListComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
