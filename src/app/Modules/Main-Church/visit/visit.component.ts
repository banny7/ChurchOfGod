import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss'],
  standalone:true,
  imports:[ SharedModule]
})
export class VisitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
