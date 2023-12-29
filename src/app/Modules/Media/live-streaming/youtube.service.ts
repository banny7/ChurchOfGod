import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  deps: [HttpClient] 
})
export class YoutubeService {
  private apiKey = 'AIzaSyAvubivDy90ggqahxaImITnH5EH3rYHDcY';

  constructor(private http: HttpClient) {}

  getChannelVideos(channelId: string): Observable<any> {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=10&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
