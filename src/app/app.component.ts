import { AuthenticationService } from '@/_services';
import { Router } from '@angular/router';
import { User } from '@/_models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'silvertec-app';
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){
      this.authenticationService.currentUser.subscribe(val => this.currentUser = val);
  }
}
