import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
apiURL: string = 'http://localhost:6688/add';
httpOptions = { headers:new HttpHeaders({
  'Content-Type' : 'application/json'
})

};
  constructor(private httpClient: HttpClient) { }

  pushDataToServer(FullName:string,Email:string,Number:string){
    return this.httpClient.post(this.apiURL,{'FullName':FullName,'Email':Email,'Number':Number},this.httpOptions);
  }
}
