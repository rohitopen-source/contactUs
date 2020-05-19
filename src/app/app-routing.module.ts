import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { AcademyComponent } from './academy/academy.component';
import { ItserviceComponent } from './itservice/itservice.component';

const routes: Routes = [
  {path: 'itservice',component : ItserviceComponent },
  {path: 'academy' , component: AcademyComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
