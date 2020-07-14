import {
    Injectable
} from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent
} from '@angular/common/http';
import {
    Observable
} from 'rxjs';
import 'rxjs/add/operator/do';

import { AuthenticationService } from '../services';

@Injectable()

export class RequestInterceptor implements HttpInterceptor {
    constructor(private auth: AuthenticationService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        const headers: any = {
            Accept: 'application/json'
        };

        if (req.headers['Content-Type']) {
            headers['Content-Type'] = req.headers['Content-Type'];
        }

        if (this.auth.isSessionActive()) {
            headers['Authorization'] = 'Bearer ' + this.auth.token;
        }

        const request = req.clone({
            setHeaders: headers
        });

        return next.handle(request);
    }
}
