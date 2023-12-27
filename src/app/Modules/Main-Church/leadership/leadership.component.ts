import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class LeadershipComponent implements OnInit {
 executiveTeam=[
  {image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Beth-Lavino.jpeg',
  name:'Beth Lavino'
  },
  {
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Jesse-Baumgartner.jpeg',
    name:'Jesse Baumgartner'
  },
  {image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Beth-Lavino.jpeg',
  name:'Beth Lavino'
  },
  {
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Jesse-Baumgartner.jpeg',
    name:'Jesse Baumgartner'
  }
 ]
 staffLists=[
  {
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Kaitlyn-Hoorneman.jpeg',
    name:'Kaitlyn Hoorneman',
    role:'GKIDS PASTOR'
  },{
    image:'https://mlvggls1rius.i.optimole.com/w:1000/h:667/q:90/f:best/https://generation.church/wp-content/uploads/2022/03/Studio-Session-166-3.jpg',
    name:'John Islas',
    role:'Youth Coordinator'
  },{
    image:'https://mlvggls1rius.i.optimole.com/w:206/h:206/q:90/f:best/https://generation.church/wp-content/uploads/2023/06/kayla-gergen.jpg',
    name:'Kayla Gergen',
    role:'BRAND DIRECTOR'
  },{
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Paul-Lavino.jpeg',
    name:'Paul Lavino',
    role:'CHAPEL PASTOR'
  },{
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Kaitlyn-Hoorneman.jpeg',
    name:'Kaitlyn Hoorneman',
    role:'GKIDS PASTOR'
  },{
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Kaitlyn-Hoorneman.jpeg',
    name:'Kaitlyn Hoorneman',
    role:'GKIDS PASTOR'
  },{
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Paul-Lavino.jpeg',
    name:'Paul Lavino',
    role:'CHAPEL PASTOR'
  },{
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Kaitlyn-Hoorneman.jpeg',
    name:'Kaitlyn Hoorneman',
    role:'GKIDS PASTOR'
  },{
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Kaitlyn-Hoorneman.jpeg',
    name:'Kaitlyn Hoorneman',
    role:'GKIDS PASTOR'
  }
  ,{
    image:'https://mlvggls1rius.i.optimole.com/w:auto/h:auto/q:90/f:best/https://generation.church/wp-content/uploads/2022/01/Kaitlyn-Hoorneman.jpeg',
    name:'Kaitlyn Hoorneman',
    role:'GKIDS PASTOR'
  }
 ]
  constructor() { }

  ngOnInit() {
  }

}
