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
      heading: 'The Bible',
      description: 
      'We believe in the divine inspiration and authority of the Bible, consisting of the Old and New Testaments. It is the infallible and authoritative guide for faith and practice, revealing the will of God for salvation and the Christian life.'
    },
    {
      heading : "God",
      description : "We believe in one God, who exists eternally in three persons: Father, Son, and Holy Spirit. God is the creator of all things, infinitely perfect and eternally existing in love, holiness, and justice."
    },
    {
      heading : "Jesus Christ",
      description : "We believe in the deity of Jesus Christ, the Son of God, who became incarnate, lived a sinless life, performed miracles, and atoned for sin through His death on the cross. We affirm His bodily resurrection and ascension, and His ongoing intercession for believers."
    },
    {
      heading : "Fall of Man",
      description : "We believe that humanity, created in the image of God, fell into sin through disobedience. As a result, all individuals are born with a sinful nature, separated from God and in need of salvation."
    },
    {
      heading : "The Salvation of Man",
      description : "We believe in the salvation of all who repent and believe in Jesus Christ as Lord and Savior. This salvation is a gift of God's grace, received through faith, and is characterized by regeneration, justification, and sanctification."
    },
    {
      heading : "Sanctification",
      description : "We believe in the ongoing process of sanctification, where believers are set apart for God's purposes and empowered by the Holy Spirit to grow in holiness and Christlikeness."
    },
    {
      heading : "The Return of Christ",
      description : "We believe in the imminent return of Jesus Christ, who will return in glory to judge the living and the dead. This event will culminate in the establishment of God's eternal kingdom."
    },
    {
      heading : "The Church",
      description : "We believe in the Church as the body of Christ, consisting of all believers. It is called to worship, fellowship, and witness, and is empowered by the Holy Spirit for ministry and mission."
    },
    {
      heading : "The Holy Spirit",
      description : "We believe in the person and work of the Holy Spirit, who convicts of sin, regenerates, indwells, and empowers believers for godly living and effective service."
    },
    {
      heading : "The Gifts of the Spirit",
      description : "We believe in the gifts of the Holy Spirit, as outlined in the New Testament, which are given to believers for the building up of the Church and the advancement of God's kingdom."
    },
    {
      heading : "Healing",
      description : "We believe in divine healing as a provision of God's grace, both for physical and spiritual restoration. It is received through faith and prayer in accordance with God's will."
    },
    {
      heading : "All People",
      description : "We believe in the dignity and worth of all people, created in the image of God. We affirm the universal need for salvation and the call to share the Gospel with every person."
    },
    {
      heading : "Marriage",
      description : "We believe in the sanctity of marriage, defined as a covenant between one man and one woman. It reflects the biblical imagery of Christ and the Church."
    },
    {
      heading : "Sexuality",
      description : "We believe in the biblical understanding of sexuality, affirming that sexual intimacy is designed by God for marriage between a man and a woman. We uphold the biblical teachings on purity and holiness in all areas of life."
    }
  ]
  values = [
    "Faith in Action",
    "Love Unconditionally",
    "Unity in Diversity",
    "Integrity Above All",
    "Service with Purpose",
    "Generosity in Giving",
    "Respect for All",
    "Excellence in Everything",
    "Inclusivity Always",
    "Empowerment for All"
  ];
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
