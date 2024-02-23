
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
      name: 'Joseph Cleetus'
    },
    {
      image: "thomas_varghese",
      name: 'Thomas Varghese'
    },
    {
      image: "mariyamma_sam", 
      name: 'Mariyamma Sam',
      role: 'Worship'
    },
  ]
  staffLists = [
    {
      image: "feby_sathish", 
      name: 'Feby Sathish',
      role: 'Worship'
    },
    {
      image: "kesiya_babu", 
      name: 'Kesiya Babu',
      role: 'Worship'
    },
    {
      image: "anna_mathews", 
      name: 'Anna Mathews',
      role: 'Worship'
    },
    {
      image: "ebez_joy", 
      name: 'Ebbase Joy',
      role: 'Worship'
    }, 
    {
      image: "aiden_bijoy", 
      name: 'Aiden Bijoy',
      role: 'Worship'
    },
    {
      image: "boaz_sam", 
      name: 'Boaz Sam',
      role: 'Media'
    }, 
    
    {
      image: "antony_philip", 
      name: 'Antony Philip',
      role: 'Media'
    },
    {
      image: "emil_k_babu", 
      name: 'Emil K Babu',
      role: 'Media'
    },
    {
      image: "anna_saji",
      name: 'Anna Saji',
      role: 'Media'
    },
    {
      image: "shijo_john", 
      name: 'Shijo John',
      role: 'Media'
    }, 
    {
      image: "sachin_roystone", 
      name: 'Sachin Roystone',
      role: 'Media'
    }, 
    {
      image: "banny_b", 
      name: 'Banny B',
      role: 'Media'
    },
    {
      image: "24", 
      name: 'Sam Juby',
      role: 'Media'
    },
    
    {
      image: "renny_joseph", 
      name: 'Renny Joseph',
      role: 'Ahavah Home'
    },
    {
      image: "justin_john", 
      name: 'Justin John',
      role: 'Ahavah Home'
    },
    
    {
      image: "annie_babu",
      name: 'Annie Babu',
      role: 'Ahavah Home'
    }, 
     {
      image: "sona_melvin",
      name: 'Sona Melvin',
      role: 'Ahavah Home'
    }, {
      image: "bini_john",
      name: 'Bini John',
      role: 'Ahavah Home'
    }, 
   
    
    {
      image: "karishma_sharma", 
      name: 'Karishma Sharma',
      role: 'Ahavah Home'
    }, 
    
    {
      image: "sarah_sachin", 
      name: 'Sarah Sachin',
      role: 'Ahavah Home'
    },  
    {
      image: "7", 
      name: 'Joyce Benson',
      role: 'Ahavah Home'
    }, 

    {
      image: "neethu_rintu", 
      name: 'Neethu Rintu',
      role: 'Ahavah Home'
    },
    {
      image: "22", 
      name: 'Anu Antony',
      role:  'Ahavah Home'
    },
    {
      image: "elsy_john",
      name: 'Elsy John',
      role: 'Ahavah Home'
    },
    {
      image: "john_mathew", 
      name: 'John K Mathew',
      role: 'Ahavah Home'
    },
    {
      image: "savitha_bijoy", 
      name: 'Savitha Bijoy',
      role: 'Ahavah Home'
    },
    {
      image : 'elsiamma_s',
      name : "Elsiamma S",
      role : "Ahavah Home"
    },

    {
      image : 'biju',
      name : "Biju",
      role : "Ahavah Home"
    },
    {
      image : 'shibu',
      name : "Shibu",
      role : "Ahavah Home"
    },
    {
      image : 'sinil_s',
      name : "Sinil S",
      role : "Ahavah Home"
    },
    {
      image : 'nisha_shibu',
      name : "Nisha Shibu",
      role : "Ahavah Home"
    },
    {
      image : 'joyel_k_j',
      name : "Joyel K J",
      role : "Ahavah Media"
    },
    {
      image : 'sneha_alex',
      name : "Sneha Alex",
      role : "Ahavah Media"
    },
    {
      image : 'rinson_philip',
      name : "Rinson Philip",
      role : "Ahavah Home"
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
