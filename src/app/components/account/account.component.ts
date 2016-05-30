import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
    selector: 'account',
    templateUrl: 'app/components/account/account.html',
    directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES]
})
@RouteConfig([
    {path:'/sign-in', name: 'Sign in', component: SignInComponent, useAsDefault: true},
    {path:'/sign-up', name: 'Sign up', component: SignUpComponent}
])
export class AccountComponent {

}