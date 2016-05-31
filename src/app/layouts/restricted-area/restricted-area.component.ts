import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {DashboardComponent} from 'app/components/dashboard/dashboard.component';

import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
    selector: 'auth-restricted',
    templateUrl: 'app/layouts/restricted-area/restricted-area.html',
    directives: [ROUTER_DIRECTIVES, MdButton, MdToolbar, MdIcon, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES],
    providers: [MdIconRegistry]
})
@RouteConfig([
    {path:'/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
])
export class RestrictedAreaComponent {
    
}