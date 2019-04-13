import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder,private authService: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })
    }

    submitHandler() {
        this.authService.login(this.form.value).subscribe(data => {
            localStorage.setItem('token', data['token'])
            localStorage.setItem('userId', data['userId'])
            localStorage.setItem('username', data['username'])
            localStorage.setItem('isAdmin', data['isAdmin'])
            this.router.navigate(['/'])
        })
        
    }

}
