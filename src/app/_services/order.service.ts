import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class OrderService {
  data: any;
  endpoint: string;
  constructor(
    private http: HttpClient
  ) {
    this.endpoint = `${environment.apiUrl}/orders`;
  }

  submitOrder(orderData) {
    return this.http.post(this.endpoint, orderData);
  }
}
