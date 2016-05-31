import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {MdButton} from '@angular2-material/button'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.html',
    directives: [ROUTER_DIRECTIVES, MdButton, MD_CARD_DIRECTIVES]
})

export class DashboardComponent {

}