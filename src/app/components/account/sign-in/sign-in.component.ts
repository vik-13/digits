import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {MdToolbar} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdInput, MdHint} from '@angular2-material/input';

import {SignInService} from './sign-in.service';
import {AuthService} from 'app/auth/auth.service';

@Component({
    selector: 'sign-in',
    templateUrl: 'app/components/account/sign-in/sign-in.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MD_BUTTON_DIRECTIVES, MdInput, MdHint],
    providers: [SignInService]
})
export class SignInComponent {
    constructor(
        private authService: AuthService,
        private signInService: SignInService,
        private router: Router) {}

    onSubmit(form) {
        console.log('on submit...');
        this.signInService.signIn({
            email: form.value.email,
            password: form.value.password
        }).then(data => {
                console.log(data);
        });
        //     .then(function() {
        //     this.authService.auth('some-very-nice-auth-token');
        //     this.router.navigate(['/dashboard']);
        // }, function(){
        //     console.log(arguments);
        // });
    }
}