import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(localStorage.getItem('isAdmin') === "true"){
            return true;
        }
        this.router.navigate(['/user/login'])

        return false;
    }
}
