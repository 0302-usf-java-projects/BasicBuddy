import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
// import { Users } from 'src/app/models/users.model';
// import { Http, Response } from "@angular/http";
// import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import {User} from '../modals/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'localhost:8080/Squad';
  url: string = '/users';
  loginUrl: string = '/logins';
 users: User[] = [];
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL + '/all.squad');
   }

  // getUsers(): Observable<Users[]> {
  //   return this.http.get<Users[]>(this.url);
  // }

  // getUserById(id: string): Promise<Users>{
  //   return this.http.get<Users>(this.url+"/"+id).toPromise();
  // }

  // getUser(userEmail: string, userPassword: string): Promise<Users>{
  //   return this.http.get<Users>(this.url+"/byemail/"+userEmail).toPromise();
  // }

  // loginValid(id: number): Promise<Users>{
  //   return this.http.get<Users>(this.url+"/logins/"+id).toPromise();
  // }

  // editUser(user: Users): Observable<Users>{
  //   return this.http.put<Users>(this.url, user);
  // }

  // searchUsers(name: string): Observable<Users[]>{
  //   return this.http.get<Users[]>(this.url+"/name/"+name);
  // }
}
