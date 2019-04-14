import { Component, OnInit, DoCheck } from '@angular/core';
import { Laptop } from 'src/app/core/models/laptop';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    laptops: Laptop[];

    constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.laptops = this.route.snapshot.data['laptops'].orders.reverse()
    }

    refresh() {
        location.reload();
    }
}
