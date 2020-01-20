﻿import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import {v4 as uuid_v4} from 'uuid';

let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {

      switch (true) {
          case url.endsWith('/users/auth') && method === 'POST':
              return authenticate();
          case url.endsWith('/users') && method === 'POST':
              return register();
          case url.endsWith('/users') && method === 'GET':
              return getUsers();
          case url.match(/\/users\/\w+$/) && method === 'DELETE':
              return deleteUser();
          default:
              // pass through any requests not handled above
              return next.handle(request);
      }
    }

      // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(x => x.username === username && x.password === password);
      if (!user) {
        return error('Username or password is incorrect');
      }
      const response = {
        id: user.id,
        username: user.username,
        fullName: user.fullName,
        email: user.email,
        isAdmin: false,
        token: 'fake-jwt-token'
      };
      if (user.username === 'admin') {
        response.isAdmin = true;
      }
      return ok(response);
    }

    function register() {
      const user = body;
      if (users.find(x => x.username === user.username)) {
          return error('Username "' + user.username + '" is already taken')
      }
      user.id = uuid_v4();
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function getUsers() {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(users);
    }

    function deleteUser() {
      if (!isLoggedIn()) {
        return unauthorized();
      }

      users = users.filter(x => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

      // helper functions

    function ok(body?) {
        return of(new HttpResponse({ status: 200, body }))
    }

    function error(message) {
        return throwError({ error: { message } });
    }

    function unauthorized() {
        return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
        return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 1];
    }
  }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};


