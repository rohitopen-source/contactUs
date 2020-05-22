import { Component } from '@angular/core';
import { User } from './user';
import{MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  country = ['U.S.A','UK','AUSTRALIA','GERMANY'];
  service = ['Mobile App','Wed Development','Digital Marketing','DevOps','Python Development'];
  budget = ['50000 - 100000','100000 - 150000','150000 - 200000','200000 - 250000','250000 - 300000','300000'];
  program =['Core UI','Backend','Full Stack','DevOps','Data Science $ AI/ML','Digital Marketing','Cloud Computing','Cyber Security','ERP','IT Certifications'];
  subprogram = ['Advanced UI','Advanced UI','Angular JS','React JS','Vue JS','Java','.Net','Node Js','Ruby','Python','Core Java','Advanced Java','MEAN','MERN','MEVN'];


  submitted = false;
  errorMsg = '';
  sucess = 'Thanks for your response';
  userModel = new User('','',9999999999,'','','','','','');
  constructor(private _enrollmentService:MyserviceService ) {}

  

  onSubmit() {
    console.log(this.userModel);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!',error)
      )
  }
  
}
