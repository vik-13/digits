import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterLink, RouteConfig} from 'angular2/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SignInComponent} from './components/account/sign-in/sign-in.component';
import {SignUpComponent} from './components/account/sign-up/sign-up.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
@RouteConfig([
    {path:'/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path:'/sign-in', name: 'Sign in', component: SignInComponent},
    {path:'/sign-up', name: 'Sign up', component: SignUpComponent}
])
export class AppComponent {

}