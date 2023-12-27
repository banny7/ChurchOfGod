import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/Main-Church/home/home.component';
import { LeadershipComponent } from './Modules/Main-Church/leadership/leadership.component';
import { ConnectComponent } from './Modules/Main-Church/connect/connect.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path:"leadership",
        component:LeadershipComponent
    },
    {
        path:'connect',
        component:ConnectComponent
    }
];
