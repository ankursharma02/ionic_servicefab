import {Injectable} from '@angular/core';
import {studentComponent,demo} from './Student/student.component'

@Injectable({
    providedIn:'root'
})
export class myservicedemo
{
    getdemo():demo[]
    {
         var  arr:demo[]=[{id:1,name:'ankur'},
                     {id:2,name:'ab'},
                     {id:3,name:'cde'},
                     {id:4,name:'fgh'},
                     {id:5,name:'ijk'},];
            return arr;

    }

}