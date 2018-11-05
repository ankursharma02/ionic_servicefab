import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgForm, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { studentComponent } from './Student/student.component';
import { studentdetails } from './studentdetails/studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    studentComponent,
    
    studentdetails
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
