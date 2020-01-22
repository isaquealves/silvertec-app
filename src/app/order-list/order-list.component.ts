import { OrderService, AuthenticationService } from '@/_services';
import { Component, OnInit } from '@angular/core';
import { User } from '@/_models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {
  orders: any;
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  loadUserOrders() {
    this.orderService.setUser(this.currentUser);
    this.orderService.getAllForUser()
      .pipe(first())
      .subscribe(orders => this.orders = orders);
  }

  loadAllOrders() {
    if (this.currentUser.isAdmin) {
      this.orderService.getAllOrders()
      .pipe(first())
      .subscribe(orders => this.orders = orders);
    }
  }
}
