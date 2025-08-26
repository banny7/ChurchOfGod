
import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeService } from '../../Media/live-streaming/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone : true,
  imports : [ SharedModule]
})
export class HomeComponent implements OnInit {
  enableYoutubeVideo : boolean = false;
  channelId = "UCWvPOQ-cxaUrA7qFr2oq5mg"; 
  url :any;
  constructor(
      private youtubeService: YoutubeService,
      private sanitizer: DomSanitizer
      ) { }

  ngOnInit() {
    this.enableLiveSermon();
  }
  rotationAngle = 0;
  rotationSpeed = 0.2;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    // Update rotation angle based on scroll position and speed
    this.rotationAngle = (window.scrollY * this.rotationSpeed) % 360; // Keep rotation within 0 to 359 degrees
  }


  getRotation(): string {
    // Return the rotation angle as a CSS transform
    return `rotate(${this.rotationAngle}deg)`;
  }
  enableLiveSermon(){
    this.enableYoutubeVideo = !this.enableYoutubeVideo;
    // if(this.enableYoutubeVideo){
    //   const videoIframe = document.querySelector('iframe') as HTMLIFrameElement;
    //   if (videoIframe) {
    //     videoIframe.src = 'https://www.youtube.com/watch?v=FhwO6u-xSFg?autoplay=1';
    //   }
    // }
    this.youtubeService.getChannelVideos(this.channelId).subscribe((data) => {

      this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+data.items[0].id.videoId+"?html5=1");
    });
  }
}
