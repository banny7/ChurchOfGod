import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : true
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  navigateToHome(){
    this.route.navigateByUrl('');
  }
  navigateToLeaderShip(){
    this.route.navigateByUrl('/leadership');
  }
  navigateToConnect(){
    this.route.navigateByUrl('/connect');
  }
  navigateToLiveStreaming(){
    this.route.navigateByUrl('/watch-live');

  }
}
