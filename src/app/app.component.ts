import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

import {AccountComponent} from './components/account/account.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path:'/dashboard', component: DashboardComponent},
    {path:'/account', component: AccountComponent},
    {path: '*', component: DashboardComponent}
])
export class AppComponent implements OnInit{

    constructor(private router: Router) {}

    ngOnInit() {
        let auth:string = localStorage.getItem('token');
        if (auth) {
            this.router.navigate(['/dashboard']);
        }else{
            this.router.navigate(['/account']);
        }
    }

}