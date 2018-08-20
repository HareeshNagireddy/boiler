import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

 //Routing 
 //Accessing constants 
import { model } from './../../models/model'; 
  //Modules 
  import { SharedModule } from '../shared/shared.module'; 
  //Components 
  import { FirstComponentComponent } from '../../components/first-component/first-component.component'; 
  import { SecondComponentComponent } from '../../components/second-component/second-component.component'; 
  
 
 
  @NgModule({ 
    imports: [ 
CommonModule, 
      SharedModule, 
    ], 
    declarations: [      FirstComponentComponent

    ] 
 }) 
  export class DashboardModule { }