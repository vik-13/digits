import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {RestrictedAreaComponent} from 'app/layouts/restricted-area/restricted-area.component';
import {AccountComponent} from './components/account/account.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path:'/home', component: RestrictedAreaComponent},
    {path:'/account/', component: AccountComponent}
])
export class AppComponent implements OnInit{

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/account']);
    }

}