import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {

  FullName = '';
  Email = '';
  Number = '';

  constructor(private fetchserver:MyserviceService) { }

  ngOnInit(): void {
  }
 
 
  /*addTheMessage(){
    this.fetchserver.pushDataToServer(this.FullName,this.Email,this.Number).subscribe(data => {
      console.log("this is detail" + data);
    })
    
}
*/
}

