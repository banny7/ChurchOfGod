
import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-live-streaming',
  templateUrl: './live-streaming.component.html',
  styleUrls: ['./live-streaming.component.scss'],
  standalone : true,
  imports : [ 
    SharedModule , 
    HttpClientModule,
    
  ],
})
export class LiveStreamingComponent implements OnInit {
  channelId = "UCWvPOQ-cxaUrA7qFr2oq5mg"; 
  videos:{
    etag : any,
    id : any
    kind : any,
    snippet : any
    src : SafeUrl,
  }[] = []
  url :any;
  constructor(
    private youtubeService: YoutubeService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
   
    this. loadChannelVideos();
  }
  loadChannelVideos() {
    this.youtubeService.getChannelVideos(this.channelId).subscribe((data) => {
      this.videos = (data.items);
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.videos[0].id.videoId+"?html5=1");
    });
  }
  
}
