import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';

import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.html',
    directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MdButton, MdToolbar],
})
@Routes([
    {path:'', component: MainComponent},
])
export class DashboardComponent {

}