import { v4String } from 'uuid/interfaces';
import { environment } from '@/environment';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {User} from '@/_models';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  signup(user: User) {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }

  delete(id: v4String) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
