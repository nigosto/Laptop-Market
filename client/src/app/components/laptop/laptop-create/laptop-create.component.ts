import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LaptopService } from 'src/app/core/services/laptop.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-laptop-create',
    templateUrl: './laptop-create.component.html',
    styleUrls: ['./laptop-create.component.css']
})
export class LaptopCreateComponent implements OnInit {

    form: FormGroup;
    type: string = "Create"; 

    constructor(private fb: FormBuilder, private laptopService: LaptopService, private router: Router) { }

    ngOnInit() {
        this.form = this.fb.group({
            brand: ['', [Validators.required]],
            model: ['', [Validators.required]],
            description: ['', [Validators.required, Validators.minLength(10)]],
            processor: ['', [Validators.required]],
            RAM: ['', [Validators.required, Validators.min(1)]],
            memory: ['', [Validators.required, Validators.min(1)]],
            videoCard: ['', [Validators.required]],
            screen: ['', [Validators.required, Validators.min(1)]],
            price: ['', [Validators.required, Validators.min(1)]],
            image: ['', [Validators.required]],
            quantity: ['', [Validators.required, Validators.min(1)]],
        })
    }

    submitHandler(form: FormGroup) {
        this.laptopService.createLaptop(form.value).subscribe(data => {
            console.log(data)

            this.router.navigate(['/']) 
        })

    }

}
