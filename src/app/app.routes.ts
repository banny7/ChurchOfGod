import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/Main-Church/home/home.component';
import { LeadershipComponent } from './Modules/Main-Church/leadership/leadership.component';
import { ConnectComponent } from './Modules/Main-Church/connect/connect.component';
import { LiveStreamingComponent } from './Modules/Media/live-streaming/live-streaming.component';
import { WhatWeBelieveComponent } from './Modules/Main-Church/what-we-believe/what-we-believe.component';
import { OurStoryComponent } from './Modules/Main-Church/our-story/our-story.component';
import { FounderComponent } from './Modules/Main-Church/leadership/founder/founder.component';
import { SatishAndFebiComponent } from './Modules/Main-Church/leadership/satish-and-febi/satish-and-febi.component';
import { VisitComponent } from './Modules/Main-Church/visit/visit.component';
import { SermonsComponent } from './Modules/Media/sermons/sermons.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "",
        pathMatch : "full",
        redirectTo : ""
    },
    {
        path:"leadership",
        component:LeadershipComponent
    },
    {
        path:"our-story",
        component: OurStoryComponent
    },
    {
        path:'connect',
        component:ConnectComponent
    },
    
    {
        path:'what-we-believe',
        component: WhatWeBelieveComponent
    },
    {
        path:'watch-live',
        component: LiveStreamingComponent
    },
    {
        path : 'founder-page',
        component : FounderComponent
    },
    {
        path : 'sathish-and-feby',
        component : SatishAndFebiComponent
    },
    {
        path : 'visit-us',
        component :VisitComponent
    },
    {
        path : 'sermons',
        component : SermonsComponent
    }
    
];
