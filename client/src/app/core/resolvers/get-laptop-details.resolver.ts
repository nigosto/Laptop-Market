import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Laptop } from '../models/laptop';
import { LaptopService } from '../services/laptop.service';

@Injectable({
    providedIn: 'root'
})
export class GetLaptopDetailsResolver implements Resolve<Laptop> {
    constructor(private laptopService: LaptopService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id']

        return this.laptopService.getLaptopDetails(id)
    }
}