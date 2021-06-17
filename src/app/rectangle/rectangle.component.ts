import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent implements OnInit {
  xp:any;
  getnum: any;
  value:any;
  totalxp: any;
  tenxp: any;
  constructor() { }
  img:string ='https://material.angular.io/assets/img/examples/shiba2.jpg';
  ngOnInit(): void {
       this.totalxp= 2000
       this.getnum = 1100;
       this.xp = this.getnum / this.totalxp * 100;
    this.value= this.xp;
    this.tenxp= this.totalxp *10 /100 ;
  }
  name:string="John Doe";
  super:string='Detective Superintendent';
  Kopfgeld:string='Kopfgeld';
  
}
