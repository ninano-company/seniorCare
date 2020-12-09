import { Component, OnInit } from '@angular/core';
import { USERS } from '../../class/users';

@Component({
  selector: 'app-facility-user',
  templateUrl: './facility-user.component.html',
  styleUrls: ['./facility-user.component.css']
})
export class FacilityUserComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
