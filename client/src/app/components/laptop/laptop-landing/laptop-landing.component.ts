import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Laptop } from 'src/app/core/models/laptop';
import { CartService } from 'src/app/core/services/cart.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-laptop-landing',
    templateUrl: './laptop-landing.component.html',
    styleUrls: ['./laptop-landing.component.css']
})
export class LaptopLandingComponent implements OnInit {

    newLaptops: Laptop[];
    lastStock: Laptop[];
    bestLaptops: Laptop[];

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.newLaptops = this.route.snapshot.data['laptops'].newLaptops
        this.lastStock = this.route.snapshot.data['laptops'].lastStock
        this.bestLaptops = this.route.snapshot.data['laptops'].bestLaptops
    }
}
