import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Laptop } from 'src/app/core/models/laptop';

@Component({
    selector: 'app-laptop-card',
    templateUrl: './laptop-card.component.html',
    styleUrls: ['./laptop-card.component.css']
})
export class LaptopCardComponent implements OnInit, DoCheck {

    @Input() laptops: Laptop[];

    constructor(private cartService: CartService,
        private snack: MatSnackBar,
        private router: Router,
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
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

    ngDoCheck() {
        this.isAdmin = this.authService.isAdmin()
    }

}
