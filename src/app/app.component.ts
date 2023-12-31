import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Core/Components/header/header.component';
import { FooterComponent } from './Core/Components/footer/footer.component';
import { LeadershipComponent } from './Modules/Main-Church/leadership/leadership.component';
import { SharedModule } from './Shared/Shared.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule, 
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LeadershipComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'churchOfGodFE';
  targetDate: Date = new Date('2023-12-31T23:59:59');
  countdown: any;
  days: any;
  hours: any;
  minutes: any;
  remainingSeconds: any;
  countdownEnded: boolean = false;
  ngOnInit(): void {
    this.updateCountdown();
    this.countdown = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const currentDate = new Date();
    const timeDifference = this.targetDate.getTime() - currentDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds <= 0) {
      clearInterval(this.countdown);
      this.countdownEnded = true;
    } else {
      this.days = Math.floor(seconds / (3600 * 24));
      this.hours = Math.floor((seconds % (3600 * 24)) / 3600);
      this.minutes = Math.floor((seconds % 3600) / 60);
      this.remainingSeconds = seconds % 60;
    }
  }
}
