import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MainboardService {
  endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = `${environment.apiUrl}/mainboards`;
  }

  getAll() {
    return this.http.get(this.endpoint);
  }

}
