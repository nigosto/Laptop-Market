import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
    constructor(private router: Router, private authService: AuthenticationService) { }

    ngOnInit() {
    }

    logout() {
        this.authService.logout()
        this.router.navigate(['/user/login'])
    }

    isAuth = this.authService.isAuthenticated();
    isAdmin = this.authService.isAdmin();
    username = localStorage.getItem('username');

    ngDoCheck() {
        this.isAuth = this.authService.isAuthenticated();
        this.isAdmin = this.authService.isAdmin();
        this.username = localStorage.getItem('username')
    }

    
    
}
