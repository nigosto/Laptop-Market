import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from 'src/app/core/models/laptop';
import { CartService } from 'src/app/core/services/cart.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-laptop-details',
    templateUrl: './laptop-details.component.html',
    styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

    laptop: Laptop;

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService,
        private snack: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit() {
        this.laptop = this.route.snapshot.data['laptop'].laptop
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
