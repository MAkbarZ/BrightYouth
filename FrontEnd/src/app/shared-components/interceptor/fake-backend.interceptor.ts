import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { delay, materialize, dematerialize, Observable, of, throwError } from 'rxjs';
import { User } from '../model/user.model';

// array in local storage for registered users
const usersKey = 'angular-10-registration-login-example-users';

let userLocalStorage: string | null;
let usersArray: User[] = [];

userLocalStorage = localStorage.getItem(usersKey);

if (userLocalStorage !== null) {
    usersArray = JSON.parse(userLocalStorage) || [];
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
        switch (true) {
            case url.endsWith('/user/authenticateMobile') && method === 'POST':
                return authenticateWithMobile();
            case url.endsWith('/user/authenticateUsername') && method === 'POST':
                return authenticateWithUsername();
            case url.endsWith('/user/register') && method === 'POST':
                return register();
            case url.endsWith('/user') && method === 'GET':
                return getUsers();
            case url.match(/\/user\/\d+$/) && method === 'GET':
                return getUserById();
            case url.match(/\/user\/\d+$/) && method === 'PUT':
                return updateUser();
            case url.match(/\/user\/\d+$/) && method === 'DELETE':
                return deleteUser();
            default:
                // pass through any requests not handled above
                return next.handle(request);
        }    
    }

    // route functions

    function authenticateWithUsername() {
        const { username, password } = <User>body;
        const user = usersArray.find(user => user.username === username && user.password === password);
        if (!user) return error('Username or password is incorrect');
        return ok({
            ...basicDetails(user),
            token: 'fake-jwt-token'
        })
    }

    function authenticateWithMobile() {
        const { mobile, password } = <User>body;
        const user = usersArray.find(user => user.mobile === mobile.trim() && user.password === password);
        if (!user) return error('mobile or password is incorrect');
        return ok({
            ...basicDetails(user),
            token: 'fake-jwt-token'
        })
    }

    function register() {
        const userInput = <User>body;

        if (usersArray.find(user => user.username === userInput.username)) {
            return error('Username "' + userInput.username + '" is already taken')
        }

        userInput.id = usersArray.length ? Math.max(...usersArray.map(user => user.id)) + 1 : 1;
        usersArray.push(userInput);
        localStorage.setItem(usersKey, JSON.stringify(usersArray));
        return ok();
    }

    function getUsers() {
        if (!isLoggedIn()) return unauthorized();
        return ok(usersArray.map(user => basicDetails(user)));
    }

    function getUserById() {
        if (!isLoggedIn()) return unauthorized();

        const user = usersArray.find(user => user.id === idFromUrl());
        return ok(basicDetails(user));
    }

    function updateUser() {
        if (!isLoggedIn()) return unauthorized();

        let params = <User>body;
        let user = usersArray.find(user => user.id === idFromUrl()) || new User();

        // only update password if entered
        if (!params.password) {
            delete params.password;
        }

        // update and save user
        Object.assign(user, params);
        localStorage.setItem(usersKey, JSON.stringify(usersArray));

        return ok();
    }

    function deleteUser() {
        if (!isLoggedIn()) return unauthorized();

        usersArray = usersArray.filter(user => user.id !== idFromUrl());
        localStorage.setItem(usersKey, JSON.stringify(usersArray));
        return ok();
    }

    // helper functions

    function ok(body?:any) {
        return of(new HttpResponse({ status: 200, body }))
            .pipe(delay(500)); // delay observable to simulate server api call
    }

    function error(message:any) {

         return throwError(() => { return new Error(`${ message }`); })
         .pipe(materialize(), delay(500), dematerialize());

        // throw new Error(`Invalid time ${ ms }`)
        /*
        return throwError({ error: { message } })
            .pipe(materialize(), delay(500), dematerialize()); 
        */
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }

    function unauthorized() {
        // return throwError({ status: 401, error: { message: 'Unauthorized' } })
        return throwError(() => { return{ status: 401, error: { message: 'Unauthorized' } }; })
            .pipe(materialize(), delay(500), dematerialize());
    }

    function basicDetails(user:any) {
        const { id, username, firstName, lastName } = user;
        return { id, username, firstName, lastName };
    }

    function isLoggedIn() {
        return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
    }
}
}

export const fakeBackendProvider = {
// use fake backend in place of Http service for backend-less development
provide: HTTP_INTERCEPTORS,
useClass: FakeBackendInterceptor,
multi: true
};