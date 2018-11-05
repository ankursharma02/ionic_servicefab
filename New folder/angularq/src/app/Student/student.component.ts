
import{Component} from '@angular/core';
import{myservicedemo} from '../myservice.service';
@Component({
     selector:'app-student',
    template:`
    <html>
    <p>my demo slice show</p>
     <li *ngFor="let s of stu" style="color:brown" [class.selected]="s === d1"
     (click)="onSelect(s)">{{s.id}}  {{s.name|uppercase}} </li>
    
       <div>
       <button (click)="getservice()">Click for service data</button>
       <li *ngFor="let s of sd">{{s.id}}  {{s.name}} </li>
       </div>         
<std-details [stu]="d1"></std-details>
    </html>
    
    `
    ,
    styles:['li { position: relative;cursor: pointer;background-color: #EEE;margin: .5em;padding: .3em 0;height: 1.6em;border-radius: 4px;}']
}
)
export class studentComponent
{               
    constructor(private myservice:myservicedemo){}
          nam:string='ankur';
          n=this.nam.slice(0,2);
          d:demo;  
          i:number=1;
        stu:demo[]=[{id:1,name:this.nam.slice(0,this.i++)},
                     {id:2,name:this.nam.slice(0,this.i++)} ,
                     {id:3,name:this.nam.slice(0,this.i++)},
                     {id:4,name:this.nam.slice(0,this.i++)},
                     {id:5,name:this.nam.slice(0,this.i++)}]
        d1:demo;         
        onSelect(s:demo) {
            this.d1=s;
        }  
        sd:demo[];                
        getservice()
        {
           this.sd= this.myservice.getdemo();
        }

}
export class demo
{

    id:number;
    name:string;
}