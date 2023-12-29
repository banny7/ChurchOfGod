import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  standalone:true,
  imports:[ SharedModule]
})
export class ConnectComponent implements OnInit {
contents=[
  { heading:'G101',
  description:'This is your next step! Learn about the mission, values, and vision of Generation Church. This is a 1-time class that will answer any questions you may have, introduce you to key leaders, and give you a tour. Be ALL IN for your church and get plugged in now!'
  },
  {
    heading:'Kids',
    description:'Kids are important to us at Generation Church! Find out about our ministries for little g’s (birth-kindergarten) and gKids (1st-5th grade).'
  },{
    heading:'Youth',
    description:'GEN YTH is an energetic youth group for students in grades 6 through 12. Learn how Generation Church is raising our youth to love and follow Jesus.'
  }
  ,{
    heading:'beautiful girl',
    description:'Beautiful Girl is a ministry for women, in every stage of life, to grow closer to Jesus and to each other.'
  }
  ,{
    heading:'Bold Men',
    description:'Bold Men is a ministry for men, helping them lead and become the man of God they were made to be!'
  }
  ,{
    heading:'Blessed Marriage',
    description:'Blessed Marriage is a biblically-centered ministry that is dedicated to helping couples understand God’s purpose for marriage and equipping them in the pursuit of oneness.'
  }
]
  constructor() { }

  ngOnInit() {
  }
translationLeft = 0;
translationRight = 0;
translationSpeed = 0.2;

@HostListener('window:scroll', ['$event'])
onScroll(event: any): void {
  // Update translations based on scroll position and speed
  this.translationLeft = window.scrollY * this.translationSpeed;
  this.translationRight = -window.scrollY * this.translationSpeed; // Use a negative value for right translation
}

getTranslationLeft(): string {
  return `translateX(${this.translationLeft}px)`;
}

getTranslationRight(): string {
  return `translateX(${this.translationRight}px)`;
}
}
