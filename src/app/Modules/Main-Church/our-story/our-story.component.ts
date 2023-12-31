import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss'],
  standalone : true,
  imports : [SharedModule]
})
export class OurStoryComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  goTo(page:any){
    console.log('Clicked');
    
    this.route.navigateByUrl(page);
  }
}
