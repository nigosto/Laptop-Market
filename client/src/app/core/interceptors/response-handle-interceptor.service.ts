import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ResponseHandleInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    if (req.url.startsWith('http://localhost:9999/feed/cart')) {
                        this.router.navigate(['/user/login'])
                        console.clear()
                        return;
                    }
                    if (err.error.message) {
                        this.snack.open(err.error.message, 'Undo', {
                            duration: 3000
                        })
                    }
                    else if (err.error.errors) {

                        err.error.errors.forEach(error => {
                            this.snack.open(error, 'Undo', {
                                duration: 3000
                            })
                        });
                    } else if (err.error.error) {
                        this.snack.open(err.error.error, 'Undo', {
                            duration: 3000
                        })
                    }
                } else if (err.status === 400) {
                    this.snack.open(err.error.error, 'Undo', {
                        duration: 3000
                    })
                } else if (err.status === 500) {
                    if(err.error.message.startsWith('Cast to ObjectId failed for value')) {
                        this.router.navigate(['/not/found'])
                    }
                }

                return throwError(err)
            })
        )
    }

    constructor(private snack: MatSnackBar, private router: Router) { }
}
