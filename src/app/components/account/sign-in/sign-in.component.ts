import {Component} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdInput, MdHint} from '@angular2-material/input';

@Component({
    selector: 'sign-in',
    templateUrl: 'app/components/account/sign-in/sign-in.html',
    directives: [RouterLink, MD_CARD_DIRECTIVES, MdButton, MdToolbar, MdInput, MdHint]
})
export class SignInComponent {

}