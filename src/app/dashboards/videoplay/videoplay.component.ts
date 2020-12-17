import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '../class/video';
@Component({
  selector: 'app-videoplay',
  templateUrl: './videoplay.component.html',
  styleUrls: ['./videoplay.component.css']
})
export class VideoplayComponent implements OnInit {
  videos = VIDEOS;
  constructor() { }

  ngOnInit(): void {
  }

}
