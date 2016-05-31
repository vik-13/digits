import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
    private token: String;

    constructor() {
        this.token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    }

    auth(token: String) {
        localStorage.setItem('token', token);
        this.token = token;
    }

    unAuth() {
        localStorage.removeItem('token');
        this.token = '';
    }

    isAuth() {
        return this.token;
    }
}