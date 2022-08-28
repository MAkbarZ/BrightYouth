import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { ApiUserService } from './api-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  private userSubjectInLocalStorage$: BehaviorSubject<User>;
  public user$: Observable<User>;

  constructor(private router: Router, private apiUserService: ApiUserService) {
    this.userSubjectInLocalStorage$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user$ = this.userSubjectInLocalStorage$.asObservable();
  }

  public get userValue(): User {
    return this.userSubjectInLocalStorage$.value;
  }

  login(user: User) {
    return this.apiUserService.login(user).pipe(
      map((user: User) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubjectInLocalStorage$.next(user);
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    // this.userSubject.next(null);
    this.userSubjectInLocalStorage$.next(new User());
    this.router.navigate(['/user/login']);
  }

  register(userInput: User) {
    return this.apiUserService.register(userInput).pipe(
      map((user: User) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubjectInLocalStorage$.next(user);
        return user;
      })
    );
  }

  update(id: number, params: any) {
    return this.apiUserService.update(id, params).pipe(
      map((user: User) => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubjectInLocalStorage$.next(user);
        }
        return user;
      })
    );
  }

  delete(id: number) {
    return this.apiUserService.delete(id).pipe(
      map((user: User) => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return user;
      })
    );
  }
}
