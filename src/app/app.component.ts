import { Component } from 'angular2/core';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material/all";


@Component({
    selector: 'my-app',
    template: '<h1>My Angular app!</h1>',
    directives: [MATERIAL_DIRECTIVES],
    providers: [MATERIAL_PROVIDERS]
})
export class AppComponent { }