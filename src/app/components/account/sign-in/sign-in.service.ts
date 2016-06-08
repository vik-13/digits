import {Injectable} from "@angular/core";
import {AuthService} from 'app/auth/auth.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class SignInService {
    constructor(private authService: AuthService, public af: AngularFire) {
        this.af.auth.subscribe(auth => console.log(auth));
    }

    signIn(data) {
        return this.af.auth.login(data);
        //this.authService.auth('some-very-nice-auth-token');
    }
}