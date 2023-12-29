import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../Shared/Shared.module';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss'],
  standalone : true,
  imports : [SharedModule]
})
export class FounderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
