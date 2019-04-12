import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private readonly BASE_URL: string = "http://localhost:9999/auth";

    constructor(private http: HttpClient) { }

    login(body: object) {
        return this.http.post(this.BASE_URL + '/signin', body);
    }

    register(body: object) {
        return this.http.post(this.BASE_URL + '/signup', body)
    }
}
