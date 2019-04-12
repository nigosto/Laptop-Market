import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.form = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]]
        })
    }

    submitHandler() {
        this.authService.register(this.form.value).subscribe(data => {
            localStorage.setItem('token', data['token'])
            localStorage.setItem('userId', data['userId'])
            localStorage.setItem('username', data['username'])
            this.router.navigate(['/'])
        })
    }

}
