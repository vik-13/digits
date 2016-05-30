import {Component} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

import {MdToolbar} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdInput, MdHint} from '@angular2-material/input';

@Component({
    selector: 'sign-in',
    templateUrl: 'app/components/account/sign-in/sign-in.html',
    directives: [RouterLink, MdToolbar, MD_BUTTON_DIRECTIVES, MdInput, MdHint]
})
export class SignInComponent {

}