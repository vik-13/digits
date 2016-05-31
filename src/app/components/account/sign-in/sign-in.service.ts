import {Injectable} from "@angular/core";
import {AuthService} from 'app/auth/auth.service';

@Injectable()
export class SignInService {
    constructor(private authService: AuthService) {}

    signIn(data) {
        console.log('Sign in with next data: ', data);
        this.authService.auth('some-very-nice-auth-token');
        return true;
    }
}