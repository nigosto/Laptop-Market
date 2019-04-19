import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from 'src/app/core/models/laptop';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
    selector: 'app-laptop-all',
    templateUrl: './laptop-all.component.html',
    styleUrls: ['./laptop-all.component.css']
})
export class LaptopAllComponent implements OnInit {

    laptops: Laptop[];

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.laptops = this.route.snapshot.data['laptops'].laptops;
    }
}
