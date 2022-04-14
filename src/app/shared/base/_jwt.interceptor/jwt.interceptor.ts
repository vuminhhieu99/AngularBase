import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorage } from '../../function/local-storage';
import { LocalStorageKey } from '../../constants/loca-storage-key';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // thêm authen vào request trước khi gọi
        const currentUser = this.authenticationService.currentUserValue;
        const access_token = currentUser && currentUser.access_token ? currentUser.access_token : LocalStorage.get(LocalStorageKey.Token);       
        if (access_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${access_token}`
                }
            });
        }

        return next.handle(request);
    }
}