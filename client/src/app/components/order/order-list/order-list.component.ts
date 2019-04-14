import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { ActivatedRoute } from '@angular/router';
import { Laptop } from 'src/app/core/models/laptop';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

    orders: Order[];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.orders = this.route.snapshot.data['orders'].orders;
        console.log(this.orders)
    }

}
