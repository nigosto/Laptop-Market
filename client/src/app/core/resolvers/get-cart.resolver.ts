import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Laptop } from '../models/laptop';
import { CartService } from '../services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class GetCartResolver implements Resolve<Laptop[]> {
    constructor(private cartService: CartService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.cartService.getCart();
    }
}