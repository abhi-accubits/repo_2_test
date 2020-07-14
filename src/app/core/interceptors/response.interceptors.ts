import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse, HttpClient,
    HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthenticationService } from '../services';

@Injectable()

export class ResponseInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthenticationService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                map(resp => {
                    this.authCheck(resp);
                    return resp;
                }),
                catchError((err) => {
                    this.authCheck(err);
                    if (err instanceof HttpErrorResponse && err.status === 401) { // unauthorized request
                        localStorage.removeItem('token');
                    } else if (err instanceof HttpErrorResponse && err.status === 403) { // Restricted
                        // TODO show alert - access restricted
                        return Observable.throw(err);
                    } else {
                        return Observable.throw(err);
                    }
                })
            );
    }

    /**
     * @param resp API RESPONSE
     * @description To refresh the token with new one if we have that on response header.
     */
    authCheck(resp) {
        const token = this.auth.token;
        const responseTokenHeaderName = 'X-NEW-TOKEN'; // Change it based on your API response.
        let newToken = token;

        if (!(resp instanceof HttpErrorResponse || resp instanceof HttpResponse)) {
            return;
        }

        if (resp && resp.headers && resp.headers.get(responseTokenHeaderName)) {
            newToken = resp.headers.get(responseTokenHeaderName);
        }

        if (token !== newToken) {
            this.auth.token = newToken;
        }
    }
}
