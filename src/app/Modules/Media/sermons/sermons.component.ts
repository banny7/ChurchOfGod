import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
  standalone:true,
  imports:[ SharedModule]
})
export class SermonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
