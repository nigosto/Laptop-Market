import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
    selector: 'app-order-all',
    templateUrl: './order-all.component.html',
    styleUrls: ['./order-all.component.css']
})
export class OrderAllComponent implements OnInit {

    pendingOrders: Order[];
    sentOrders: Order[];
    
    constructor(private route: ActivatedRoute, private orderService: OrderService) { }

    ngOnInit() {
        this.pendingOrders = this.route.snapshot.data['orders'].orders.filter(o => o.status === "Not processed");
        this.sentOrders = this.route.snapshot.data['orders'].orders.filter(o => o.status === "Sent");
        console.log(this.pendingOrders)
    }

    removeHandler(orderId: string) {
        this.orderService.removeOrder(orderId).subscribe(data => {

            location.reload();
        })
    }

    sendHandler(orderId: string){
        this.orderService.sendOrder(orderId).subscribe(data => {
            location.reload()
        })
    }
}
