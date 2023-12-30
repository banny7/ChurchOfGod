import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-what-we-believe',
  templateUrl: './what-we-believe.component.html',
  styleUrls: ['./what-we-believe.component.scss'],
  standalone : true,
  imports : [SharedModule]
})
export class WhatWeBelieveComponent implements OnInit {

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
