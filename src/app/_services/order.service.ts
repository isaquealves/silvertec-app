import { User } from '@/_models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class OrderService {
 
  private endpoint: string;
  private currentUser: User;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = `${environment.apiUrl}/orders`;
  }

  setUser(user: User) {
    this.currentUser = user;
  }

  getAllForUser() {
    return this.http.get(`${environment.apiUrl}/user/${this.currentUser.id}/orders`);
  }

  getAllOrders() {
    return this.http.get(this.endpoint);
  }

  submitOrder(orderData) {
    console.log(orderData);
    return this.http.post(this.endpoint, orderData);
  }
}
