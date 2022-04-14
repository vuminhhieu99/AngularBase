import { LocalStorageKey } from 'src/app/shared/constants/loca-storage-key';
import { Component } from '@angular/core';
import { LocalStorage } from './shared/function/local-storage';
import { UserLogin } from './shared/models/user-login';
import { AuthenticationService } from './shared/services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-base';
  currentUser: any = null;
  token: any;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.token = LocalStorage.get(LocalStorageKey.Token);
  }



}
