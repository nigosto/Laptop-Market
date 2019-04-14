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
export class LaptopLandingComponent implements OnInit, DoCheck {

    newLaptops: Laptop[];
    lastStock: Laptop[];
    bestLaptops: Laptop[];

    constructor(
        private route: ActivatedRoute,
        private authService: AuthenticationService,
        private cartService: CartService,
        private snack: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit() {
        this.newLaptops = this.route.snapshot.data['laptops'].newLaptops
        this.lastStock = this.route.snapshot.data['laptops'].lastStock
        this.bestLaptops = this.route.snapshot.data['laptops'].bestLaptops
    }

    isAdmin = this.authService.isAdmin()

    ngDoCheck() {
        this.isAdmin = this.authService.isAdmin()
    }

    buyHandler(laptopId: string) {
        console.log('hi')
        this.cartService.addLaptopToCart(laptopId, localStorage.getItem('userId')).subscribe(data => {
            this.snack.open(data['message'], 'Undo', {
                duration: 3000
            })
            this.router.navigate(['/cart'])
        })
    }
}
