import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {MdToolbar} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdInput, MdHint} from '@angular2-material/input';

import {SignUpService} from './sign-up.service';
import {AuthService} from 'app/auth/auth.service';

@Component({
    selector: 'sign-up',
    templateUrl: 'app/components/account/sign-up/sign-up.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MD_BUTTON_DIRECTIVES, MdInput, MdHint],
    providers: [SignUpService]
})
export class SignUpComponent {
    constructor(
        //private authService: AuthService,
        private signUpService: SignUpService) {}

    onSubmit(form) {
        this.signUpService.signUp({
            email: form.value.email,
            password: form.value.password
        }).then(function() {
            console.log(arguments);
            //this.authService.auth('some-very-nice-auth-token');
            //this.router.navigate(['/dashboard']);
        }, function(){
            console.log(arguments);
        });
    }
}