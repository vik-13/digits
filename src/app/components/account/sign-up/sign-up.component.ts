import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {MdToolbar} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdInput, MdHint} from '@angular2-material/input';

@Component({
    selector: 'sign-up',
    templateUrl: 'app/components/account/sign-up/sign-up.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MD_BUTTON_DIRECTIVES, MdInput, MdHint]
})
export class SignUpComponent {

}