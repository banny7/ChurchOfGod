import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone : true,
  imports : [SharedModule]
})
export class FooterComponent implements OnInit {
  number:string = "9447266578";
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
  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }
  copyNumber(){
    navigator.clipboard.writeText(this.number)
    .then(() => {
      alert('Phone number copied to clipboard');
    })
    .catch((err) => console.error(err.name, err.message));
  }
  navigateTo(page:any){
    this.route.navigateByUrl(page);
  }
}
