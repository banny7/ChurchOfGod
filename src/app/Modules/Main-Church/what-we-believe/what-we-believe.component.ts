import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-what-we-believe',
  templateUrl: './what-we-believe.component.html',
  styleUrls: ['./what-we-believe.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class WhatWeBelieveComponent implements OnInit {
  contents = [
    {
      heading: 'Discipleship',
      description: 
      'This is your next step! Learn about the mission, values, and vision of Gospel Centre. This is a 1-time class that will answer any questions you may have, introduce you to key leaders, and give you a tour. Be ALL IN for your church and get plugged in now!'
    },
    {
      heading: 'Kids and Teens',
      description: 'Kids are important to us at Gospel Centre! Find out about our ministries for little g’s (birth-kindergarten), gKids (1st-5th grade) and youth group for students in grades 6 through 12'
    }, 
    {
      heading: 'Worship and Music',
      description: `
        Embrace the transformative power of worship in our community. Join our gatherings to experience the joy and connection that comes from praising God through music. Dive into the heart of our worship values and understand the significance of music in our spiritual journey. Come, let's lift our voices together!
      `}
    , 
    {
      heading: 'Prayer and Intercession',
      description: "Engage in the spiritual discipline of prayer as we believe in its profound impact on our lives and community. Join us in moments of intercession where we seek God's guidance and blessings for our church, families, and beyond. Discover the strength that comes from building a culture of prayer and connection with the divine."
    }
    , 
    {
      heading: 'Community and Outreach',
      description: "Explore the heart of our commitment to community and outreach. Understand the values that drive us to share God's love beyond the walls of our church. Join hands with us as we actively participate in community service and outreach programs, making a positive impact on the lives of those around us."
    },
    {
      heading : "Missions and Global Outreach",
      description : "Be part of something bigger! Discover our beliefs and commitment to global missions. Learn about the missionaries we support and engage with our global outreach initiatives. Together, let's spread the message of hope and salvation to every corner of the world."
    },
    {
      heading : "Doctrine and Theology",
      description: "Delve into the rich tapestry of our core doctrinal beliefs. Join discussions that explore the theological foundations shaping our faith. Gain a deeper understanding of the principles that guide our teachings, fostering a community rooted in a shared understanding of our faith." 
    },
    {
      heading : "Family and Marriage",
      description : "Strengthen the fabric of your family and relationships through our shared values. Discover our beliefs on family values and the sanctity of marriage. Join conversations that nurture strong and faithful families, fostering an environment where love, respect, and faith thrive."
    }

    // , 
    // {
    //   heading: 'Blessed Marriage',
    //   description: 'Blessed Marriage is a biblically-centered ministry that is dedicated to helping couples understand God’s purpose for marriage and equipping them in the pursuit of oneness.'
    // }
  ]
  values = ['Whatever It Takes', 'Show Our Passion', 'We Bleed GC', 'Never Stop Growing', 'Honor Up, Down, and All Around',
    'Church Should Be Fun', 'Make It Attractive', 'Reject Good for Great', 'Lead From the Front', 'We Get to Give']
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
