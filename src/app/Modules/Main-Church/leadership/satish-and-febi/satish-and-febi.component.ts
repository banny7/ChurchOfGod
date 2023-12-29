import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../Shared/Shared.module';

@Component({
  selector: 'app-satish-and-febi',
  templateUrl: './satish-and-febi.component.html',
  styleUrls: ['./satish-and-febi.component.scss'],
  standalone : true,
  imports : [SharedModule]
})
export class SatishAndFebiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
