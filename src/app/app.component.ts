import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterLink, RouteConfig} from '@angular/router-deprecated';
import {RestrictedAreaComponent} from 'app/layouts/restricted-area/restricted-area.component';
import {AccountComponent} from './components/account/account.component';
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES, RouterLink],
    providers: [HTTP_PROVIDERS]
})
@RouteConfig([
    {path:'/...', name: 'Restricted Area', component: RestrictedAreaComponent, useAsDefault: true},
    {path:'/account/...', name: 'Account', component: AccountComponent}
])
export class AppComponent {

}