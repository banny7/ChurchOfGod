import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-what-we-believe',
  templateUrl: './what-we-believe.component.html',
  styleUrls: ['./what-we-believe.component.scss'],
  standalone : true,
  imports : [SharedModule]
})
export class WhatWeBelieveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
