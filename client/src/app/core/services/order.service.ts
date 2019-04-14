import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private readonly BASE_URL = "http://localhost:9999/feed/order";

    constructor(private http: HttpClient) { }

    getUserOrders() {
        const userId = localStorage.getItem('userId')
        return this.http.get<Order[]>(this.BASE_URL + `/${userId}`);
    }
}
