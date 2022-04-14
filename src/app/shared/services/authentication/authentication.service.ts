import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageKey } from '../../constants/loca-storage-key';
import { HttpService } from '../http/http.service';
import { ResponseService, StatusResponse } from '../../models/response-service';
import { StatusCode } from '../../enumaration/status-code';
import { UserLogin } from '../../models/user-login';
import { LocalStorage } from '../../function/local-storage';
import { Router } from '@angular/router';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private token: string = '';  
    private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public currentUser: Observable<UserLogin>;
    constructor(private http: HttpService, private router : Router) {   
        this.token =  String(localStorage.getItem(LocalStorageKey.Token)); 
        this.currentUser = this.currentUserSubject.asObservable();
       
    }

    public get currentUserValue(): UserLogin {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const me= this;
        return this.http.post(`admin/auth/login`, { username, password })
            .pipe(map((res: ResponseService) => {              
                if (res && res.code == StatusCode.Success && res.message?.status == StatusResponse.success) {                   
                    LocalStorage.set(LocalStorageKey.Token, (res.data as UserLogin).access_token || "");
                    LocalStorage.set(LocalStorageKey.RefreshToken, (res.data as UserLogin).refresh_toke || "");
                    LocalStorage.set(LocalStorageKey.UserID, (res.data as UserLogin).user_id || "");
                    me.currentUserSubject.next(res.data);
                    me.startRefreshTokenTimer();
                }
                return res;
            }));
    }
    logout() {
        
        LocalStorage.remove(LocalStorageKey.Token);        
        this.http.post(`admin/auth/logout`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }

    private refreshTokenTimeout: any;

    // thực hiện vòng đời của fresh token
    private startRefreshTokenTimer(){     
        const jwtToken = JSON.parse(decodeURIComponent(atob((this.currentUserValue.access_token || '').split('.')[1].replace(/-/g, '+').replace(/_/g, '/')).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    //refresh Token
    refreshToken() {
        return this.http.post(`admin/auth/token/refresh`, {}, {withCredentials: true})
            .pipe(map((res : ResponseService) => {
                if(res.data || res.data.access_token){
                    LocalStorage.set(LocalStorageKey.Token, res.data.access_token);
                }
                this.startRefreshTokenTimer();
                return res;
            }));        
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}