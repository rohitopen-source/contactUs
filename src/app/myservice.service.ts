import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
apiURL: string = 'http://localhost:6789/contact';
httpOptions = { headers:new HttpHeaders({
  'Content-Type' : 'application/json'
})

};
  constructor(private) { }
}
