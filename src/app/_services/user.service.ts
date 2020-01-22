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

  signup(user: User) {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }
}
