import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laptop } from '../models/laptop';

@Injectable({
    providedIn: 'root'
})
export class LaptopService {

    private readonly BASE_URL: string = "http://localhost:9999/feed/laptop"

    constructor(private http: HttpClient) { }

    getAllLaptops() {
        return this.http.get<Laptop[]>(this.BASE_URL + '/all')
    }

    getLaptopDetails(id: string) {
        return this.http.get<Laptop>(this.BASE_URL + '/details/' + id)
    }

    createLaptop(body: Laptop) {
        return this.http.post(this.BASE_URL + '/create', body)
    }

    
}
