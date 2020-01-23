import { HttpClient } from '@angular/common/http';
import { environment } from '@/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProcessorService {
  endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = `${environment.apiUrl}/processors`;
  }

  getAll() {
    return this.http.get(this.endpoint);
  }
}
