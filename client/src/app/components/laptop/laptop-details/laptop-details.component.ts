import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Laptop } from 'src/app/core/models/laptop';

@Component({
    selector: 'app-laptop-details',
    templateUrl: './laptop-details.component.html',
    styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

    laptop: Laptop;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.laptop = this.route.snapshot.data['laptop'].laptop
    }

}
