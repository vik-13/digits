import {Injectable} from "@angular/core";
import {AngularFire} from 'angularfire2';

@Injectable()
export class SignInService {
    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => console.log(auth));
    }

    signIn(data) {
        return this.af.auth.login(data);
    }
}