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
        private route: ActivatedRoute,
        private cartService: CartService,
        private authService: AuthenticationService,
        private snack: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit() {
        this.laptops = this.route.snapshot.data['laptops'].laptops;
    }

    isAdmin = this.authService.isAdmin()

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
