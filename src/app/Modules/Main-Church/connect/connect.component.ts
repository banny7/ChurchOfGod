import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

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
