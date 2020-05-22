import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service'

@Component({
  selector: 'app-itservice',
  templateUrl: './itservice.component.html',
  styleUrls: ['./itservice.component.css']
})
export class ItserviceComponent implements OnInit {

   FullName = '';
   Email = '';
   Number = '';


  constructor(private fetchserver:MyserviceService) { }

  ngOnInit(): void {
  }

  /* addTheMessage(){
    this.fetchserver.pushDataToServer(this.FullName,this.Email,this.Number).subscribe(data => {
      console.log("this is detail" + data);
    })
  }
  */

}
