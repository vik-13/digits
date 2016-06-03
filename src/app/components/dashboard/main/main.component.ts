import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

import {MdButton} from '@angular2-material/button'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'

@Component({
    selector: 'main',
    templateUrl: 'app/components/dashboard/main/main.html',
    directives: [ROUTER_DIRECTIVES, MdButton, MD_CARD_DIRECTIVES]
})

export class MainComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        //this.router.navigate(['/sign-in']);
    }

}