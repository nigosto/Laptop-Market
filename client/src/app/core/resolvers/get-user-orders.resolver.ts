import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';

@Injectable({
    providedIn: 'root'
})
export class GetUserOrdersResolver implements Resolve<Order[]> {
    constructor(private orderService: OrderService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.orderService.getUserOrders();
    }
}