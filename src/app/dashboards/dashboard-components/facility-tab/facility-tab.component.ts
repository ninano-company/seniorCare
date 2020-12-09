import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-facility-tab',
  templateUrl: './facility-tab.component.html',
  styleUrls: ['./facility-tab.component.css']
})
export class FacilityTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentJustify = 'justified';

  currentOrientation = 'horizontal';
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

}
