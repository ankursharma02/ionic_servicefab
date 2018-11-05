import {Component, Input} from '@angular/core';
import{studentComponent,demo} from '../Student/student.component'
@Component({
    selector:'std-details',
    template:`
    <div *ngIf="stu">
 
  <h2>{{stu.name | uppercase}} Details</h2>
  <div><span>id: </span>{{stu.id}}</div>
  <div>
    <label>name:
      <input [(ngModel)]="stu.name" placeholder="name">
    </label>
  </div>
 
</div> 
    `

})
export class studentdetails
{
    @Input() stu:demo;


}