import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class ResponseHandleInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    if (err.error.message) {
                        this.snack.open(err.error.message, 'Undo', {
                            duration: 3000
                        })
                    }
                    else if (err.error.errors){
                        err.error.errors.forEach(error => {
                            this.snack.open(error, 'Undo', {
                                duration: 3000
                            })
                        });
                    }
                }

                return throwError(err)
            })
        )
    }

    constructor(private snack: MatSnackBar) { }
}
