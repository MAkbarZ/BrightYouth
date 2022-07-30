import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../model/user.model';
import { GlobalConstant } from '../../shared-components/types/globaltypes';
import { ApiUserService } from './api-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject$: BehaviorSubject<User> = new BehaviorSubject<User>(
    new User()
  );
  // private productsArray$ = new BehaviorSubject<Product[]>([]);
  public user$: Observable<User> = new Observable<User>();

  constructor(private router: Router, private apiUserService: ApiUserService) {
    localStorage.setItem('user', '{}');
    // let userLocalStorage: any;
    if (typeof (Storage) != undefined) {
    let userLocalStorage = JSON.parse((localStorage.getItem('user') || 'nothing found'));
    // console.log(typeof userLocalStorage);
    // if (typeof userLocalStorage && <unknown>userLocalStorage.length > 0) {
      if (userLocalStorage !== null ) {
        this.userSubject$ = new BehaviorSubject<User>(userLocalStorage);
        this.user$ = this.userSubject$.asObservable();
      }

    }

  }

  public get userValue(): User {
    return this.userSubject$.value;
  }

  
}
