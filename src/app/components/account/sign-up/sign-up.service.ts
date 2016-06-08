import {Injectable} from "@angular/core";
import {AuthService} from 'app/auth/auth.service';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class SignUpService {
    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => console.log(auth));
    }

    signUp(data) {
        return this.af.auth.createUser(data);
    }
}