import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
    selector: 'account',
    templateUrl: 'app/components/account/account.html',
    directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES]
})
@Routes([
    {path:'sign-in', component: SignInComponent},
    {path:'sign-up', component: SignUpComponent}
])
export class AccountComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['sign-in']);
    }


}