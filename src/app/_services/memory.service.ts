import { Injectable } from '@angular/core';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MemoryService {
  endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = `${environment.apiUrl}/memorymodules`;
  }

  getAll() {
    return this.http.get(this.endpoint);
  }
}
