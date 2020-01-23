import { User } from '@/_models';
import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '@/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

  goOrder() {
    this.router.navigate(['/orders']);
  }
}
