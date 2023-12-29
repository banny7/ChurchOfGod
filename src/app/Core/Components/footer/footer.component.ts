import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone : true
})
export class FooterComponent implements OnInit {
  number:string = "9447266578";
  constructor() { }

  ngOnInit() {
  }
  copyNumber(){
    navigator.clipboard.writeText(this.number)
    .then(() => {
      alert('Phone number copied to clipboard');
    })
    .catch((err) => console.error(err.name, err.message));
  }
}
