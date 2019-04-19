import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-laptop-form',
    templateUrl: './laptop-form.component.html',
    styleUrls: ['./laptop-form.component.css']
})
export class LaptopFormComponent implements OnInit {

    @Input() form: FormGroup;
    @Input() type: string;
    @Output() submitEventEmitter = new EventEmitter<FormGroup>();

    constructor() { }

    ngOnInit() {
    }

    submitHandler() {
        this.submitEventEmitter.emit(this.form)
    }

}
