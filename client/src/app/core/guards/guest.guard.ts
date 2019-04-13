import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GuestGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token') === null) {
            return true;
        }
        this.router.navigate(['/'])

        return false;
    }
}
