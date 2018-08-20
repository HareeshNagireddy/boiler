import { NgModule } from '@angular/core'; 
  import { CommonModule } from '@angular/common'; 
  //Translate for all child modules 
  import {HttpClientModule, HttpClient} from '@angular/common/http'; 

 
  


   @NgModule({ 
    imports: [ 
     CommonModule, 
     HttpClientModule, 
  ], 
  exports: [ 
  ], 
  declarations: [], 
  providers:[] 
  }) 
  export class SharedModule { } 
