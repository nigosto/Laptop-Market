import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laptop } from '../models/laptop';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private readonly BASE_URL: string = "http://localhost:9999/feed/cart"

    constructor(private http: HttpClient) { }

    addLaptopToCart(laptopId: string, userId: string) {
        return this.http.put(this.BASE_URL + `/${userId}/add/${laptopId}`, {} )
    }

    getCart() {
        const userId = this.BASE_URL + `/${localStorage.getItem('userId')}`;
        return this.http.get<Laptop[]>(userId)
    }

    removeLaptopFromCart(laptopId: string, userId: string) {
        return this.http.put(this.BASE_URL + `/${userId}/remove/${laptopId}`, {} )
    }
}
