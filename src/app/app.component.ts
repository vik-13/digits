import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterLink, RouteConfig} from '@angular/router-deprecated';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AccountComponent} from './components/account/account.component';
import {HTTP_PROVIDERS} from '@angular/http'
import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES, RouterLink, MdButton, MdToolbar, MdIcon, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES],
    providers: [MdIconRegistry, HTTP_PROVIDERS]
})
@RouteConfig([
    {path:'/dashboard', name: 'Dashboard', component: DashboardComponent},
    {path:'/account/...', name: 'Account', component: AccountComponent, useAsDefault: true}
    // {path: '/**', redirectTo: ['Dashboard'] }
])
export class AppComponent {

}