import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {MdToolbar} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdInput, MdHint} from '@angular2-material/input';

import {SignInService} from './sign-in.service';

@Component({
    selector: 'sign-in',
    templateUrl: 'app/components/account/sign-in/sign-in.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MD_BUTTON_DIRECTIVES, MdInput, MdHint],
    providers: [SignInService]
})
export class SignInComponent {
    constructor(private signInService: SignInService, private router: Router) {}

    onSubmit(form) {
        this.signInService.signIn({
            email: form.value.email,
            password: form.value.password
        });
        this.router.navigate(['/dashboard']);
    }
}