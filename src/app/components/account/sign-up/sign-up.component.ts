import {Component} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

import {MdToolbar} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdInput, MdHint} from '@angular2-material/input';

@Component({
    selector: 'sign-up',
    templateUrl: 'app/components/account/sign-up/sign-up.html',
    directives: [RouterLink, MdToolbar, MD_BUTTON_DIRECTIVES, MdInput, MdHint]
})
export class SignUpComponent {

}