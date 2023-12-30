
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';
import { SectionHeaderComponent } from '../../../Shared/Components/section-header/section-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class LeadershipComponent implements OnInit {
  pastors = [
    {
      image: "1", 
      name: 'Beth Lavino'
    },
    {
      image: "2",
      name: 'Jesse Baumgartner'
    },
    {
      image: "3", 
      name: 'Beth Lavino'
    },
    {
      image: "4", 
      name: 'Jesse Baumgartner'
    },
    {
      image: "5", 
      name: 'Jesse Baumgartner'
    },
    {
      image: "6", 
      name: 'Jesse Baumgartner'
    }
  ]
  staffLists = [
    {
      image: "8", 
      name: 'Paul Lavino',
      role: 'CHAPEL PASTOR'
    }, 
    {
      image: "1",
      name: 'Kaitlyn Hoorneman',
      role: 'GKIDS PASTOR'
    }, {
      image: "2",
      name: 'John Islas',
      role: 'Youth Coordinator'
    }, {
      image: "3",
      name: 'Kayla Gergen',
      role: 'BRAND DIRECTOR'
    }, {
      image: "5", 
      name: 'Paul Lavino',
      role: 'CHAPEL PASTOR'
    }, {
      image: "4",
      name: 'Kaitlyn Hoorneman',
      role: 'GKIDS PASTOR'
    }, {
      image: "6", 
      name: 'Kaitlyn Hoorneman',
      role: 'GKIDS PASTOR'
    }, {
      image: "7", 
      name: 'Paul Lavino',
      role: 'CHAPEL PASTOR'
    }, 
    

  ]
  constructor(
    private route:Router
  ) { }

  ngOnInit() {
  }
  goTo(page:any){
    this.route.navigateByUrl(page);
  }

}
