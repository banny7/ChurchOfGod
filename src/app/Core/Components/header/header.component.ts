import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : true,
  imports : [SharedModule]
})
export class HeaderComponent implements OnInit {
  pages = [
    {
      title : "What we Believe",
      name : "/what-we-believe"
    },
    {
      title : "Leadership",
      name : "/leadership"
    },
    {
      title : "Our Story",
      name : "/our-story"
    },
    {
      title : "Connect",
      name : "/connect"
    }
]
isMenuOpen = false;
windowWidth: any;
  constructor(private route:Router) { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.updateMenuState();
  }
  navigateTo(page:any){
    this.route.navigateByUrl(page);
  }
  toggleMenu() {
    console.log('TOGGLED!!');
    
    this.isMenuOpen = !this.isMenuOpen;
  }
    // Function to update the window width
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.windowWidth = event.target.innerWidth;
      this.updateMenuState();
    }
      // Function to update the menu state based on the window width
  updateMenuState() {
    if (window.innerWidth >= 768) {
      this.isMenuOpen = true; // Show menu when screen width is 768px or more
    } else {
      this.isMenuOpen = false; // Hide menu when screen width is less than 768px
    }
  }
  
}
