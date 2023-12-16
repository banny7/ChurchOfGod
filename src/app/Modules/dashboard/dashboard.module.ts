import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { VisitUsComponent } from './visit-us/visit-us.component';
import { WatchLiveComponent } from './watch-live/watch-live.component';
import { DailyMessageComponent } from './daily-message/daily-message.component';
import { TakeMeToComponent } from './take-me-to/take-me-to.component';
import { WhatWeHaveGoingOnComponent } from './what-we-have-going-on/what-we-have-going-on.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    HeroSectionComponent,
    OurMissionComponent,
    VisitUsComponent,
    WatchLiveComponent,
    DailyMessageComponent,
    TakeMeToComponent,
    WhatWeHaveGoingOnComponent,
    SignUpComponent
  ]
})
export class DashboardModule { }
