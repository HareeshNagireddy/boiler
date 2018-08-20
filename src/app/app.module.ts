import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import {caseService} from './file/file.service';










@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
     

   

    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule

  
  ],
  providers: [caseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
