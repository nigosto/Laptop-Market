import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Laptop } from 'src/app/core/models/laptop';
import { CartService } from 'src/app/core/services/cart.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-cart-form',
    templateUrl: './cart-form.component.html',
    styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

    @Input() laptop: Laptop;
    @Output() removeLaptopEmitter = new EventEmitter<void>();

    form: FormGroup;
    constructor(private route: ActivatedRoute, private fb: FormBuilder, private cartService: CartService, private snack: MatSnackBar) { }

    ngOnInit() {
        this.form = this.fb.group({
            quantity: [1, [Validators.required, Validators.min(1)]]
        })
    }

    removeHandler(laptopId: string) {
        this.cartService.removeLaptopFromCart(laptopId, localStorage.getItem('userId')).subscribe(data => {
            this.snack.open(data['message'], 'Undo', {
                duration: 3000
            })
            this.removeLaptopEmitter.emit()
        })
    }
}
