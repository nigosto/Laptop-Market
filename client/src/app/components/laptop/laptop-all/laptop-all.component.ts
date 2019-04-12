import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Laptop } from 'src/app/core/models/laptop';

@Component({
    selector: 'app-laptop-all',
    templateUrl: './laptop-all.component.html',
    styleUrls: ['./laptop-all.component.css']
})
export class LaptopAllComponent implements OnInit {

    laptops: Laptop[];
    description: string;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.laptops = this.route.snapshot.data['laptops'].laptops;
    }

    

}
