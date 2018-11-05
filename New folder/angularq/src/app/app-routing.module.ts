import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { studentComponent } from './Student/student.component';

const routes: Routes = [{path:'student',component:studentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
