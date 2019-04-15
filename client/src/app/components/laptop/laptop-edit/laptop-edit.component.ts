import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LaptopService } from 'src/app/core/services/laptop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Laptop } from 'src/app/core/models/laptop';

@Component({
    selector: 'app-laptop-edit',
    templateUrl: './laptop-edit.component.html',
    styleUrls: ['./laptop-edit.component.css']
})
export class LaptopEditComponent implements OnInit {

    laptop: Laptop;
    form: FormGroup;

    constructor(private fb: FormBuilder, private laptopService: LaptopService, private router: Router,
        private route: ActivatedRoute,) { }

    ngOnInit() {
        this.laptop = this.route.snapshot.data['laptop'].laptop
        this.form = this.fb.group({
            brand: [this.laptop.brand, [Validators.required]],
            model: [this.laptop.model, [Validators.required]],
            description: [this.laptop.description, [Validators.required, Validators.minLength(10)]],
            processor: [this.laptop.processor, [Validators.required]],
            RAM: [this.laptop.RAM, [Validators.required, Validators.min(1)]],
            memory: [this.laptop.memory, [Validators.required, Validators.min(1)]],
            videoCard: [this.laptop.videoCard, [Validators.required]],
            screen: [this.laptop.screen, [Validators.required, Validators.min(1)]],
            price: [this.laptop.price, [Validators.required, Validators.min(1)]],
            image: [this.laptop.image, [Validators.required]],
            quantity: [this.laptop.quantity, [Validators.required, Validators.min(1)]],
        })
    }

    submitHandler() {
        let id;
        this.route.params.subscribe(data => {
            id = data.id;
        })
         this.laptopService.editLaptop(id,this.form.value).subscribe(data => {
             console.log(data)

             this.router.navigate(['/']) 
         })

    }

}
