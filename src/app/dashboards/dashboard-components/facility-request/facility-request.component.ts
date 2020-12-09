import { Component, OnInit } from '@angular/core';
import { REQUESTS } from '../../class/requests';


@Component({
  selector: 'app-facility-request',
  templateUrl: './facility-request.component.html',
  styleUrls: ['./facility-request.component.css']
})
export class FacilityRequestComponent implements OnInit {

  requests = REQUESTS;

  constructor() { }

  ngOnInit(): void {
  }

}
