import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { GlobalConstant } from '../types/globaltypes';

const headers = new HttpHeaders({ 
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Access-Control-Allow-Origin,Access-Control-Allow-Methods,X-Requested-With,Content-Type,Accept,Origin"
  // 'authentication-token':'12134'
});

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  
  private baseUrl:string = GlobalConstant.apiBaseURL;
  

  constructor(private http: HttpClient) { 
  }

  // getUsers() {
  //   return this.http.get<User>(this.baseUrl + '/users');
  // }

  
  login(user: User) {
    // return this.http.post<User>(this.baseUrl + 'user/authenticate', {
    //     username,
    //     password,
    //   });
    return this.http.post<User>(this.baseUrl + 'user/create.php', user, {headers: headers});
  }

  /*
  logout() {
    // don't have anything to do on the server side.
  }
  */

  register(user: User) {
    // return this.http.post<User>(this.baseUrl + 'user/create.php', user, {headers: headers});

    return this.http.post<User>(this.baseUrl + 'user/create.php', user, {headers: headers});
  }

  getAll() {
    return this.http.get<User[]>(this.baseUrl + 'user');
  }

  getById(id: number) {
    return this.http.get<User>(this.baseUrl + `user/${id}`);
  }

  update(id: number, params: any) {
    return this.http.put<User>(this.baseUrl + `user/${id}`, params);
  }

  delete(id: number) {
    return this.http.delete<User>(this.baseUrl + `user/${id}`);
  }

}
