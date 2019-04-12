import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-laptop-create',
    templateUrl: './laptop-create.component.html',
    styleUrls: ['./laptop-create.component.css']
})
export class LaptopCreateComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) { }

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

    submitHandler() {
        console.log(this.form.value)
    }

}
