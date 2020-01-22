import { HttpClient } from '@angular/common/http';
import { environment } from '@/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GraphicboardsService {
  endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = `${environment.apiUrl}/graphicboards`;
  }

  getAll() {
    return this.http.get(this.endpoint);
  }
}
