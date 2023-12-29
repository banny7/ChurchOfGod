import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone : true,
  imports : [CommonModule]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
