import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AppComponent} from './app.component';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

import {AuthService} from 'app/auth/auth.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass : HashLocationStrategy}),
    
    AuthService,

    FIREBASE_PROVIDERS,
    defaultFirebase('https://torrid-heat-2819.firebaseio.com')
]);