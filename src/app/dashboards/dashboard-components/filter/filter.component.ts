import { Component, OnInit } from '@angular/core';
import { CCTVFILTER } from '../../class/filter';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  cctvFilters = CCTVFILTER;

  constructor() {}
  
  ngOnInit(): void {
  }

}
