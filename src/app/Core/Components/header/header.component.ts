import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : true,
  imports : [SharedModule]
})
export class HeaderComponent implements OnInit {
  pages = [
    {
      title : "What we Believe",
      name : "/what-we-believe"
    },
    {
      title : "Leadership",
      name : "/leadership"
    },
    {
      title : "Our Story",
      name : "/our-story"
    },
    {
      title : "Connect",
      name : "/connect"
    }
]
  constructor(private route:Router) { }

  ngOnInit() {
  }
  navigateTo(page:any){
    this.route.navigateByUrl(page);
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
