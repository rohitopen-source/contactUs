import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {Observable} from 'rxjs';
//import { map } from 'rxjs/operators';
import { User } from './user';
//import { catchError } from 'rxjs/operators';
//import { throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  _url = 'http://localhost:6688/add';
  constructor(private _http: HttpClient) { }

  enroll (user: User) {
    return this._http.post<any>(this._url, user)
      
  }

  
}
