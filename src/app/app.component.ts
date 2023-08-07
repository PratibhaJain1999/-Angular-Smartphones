import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Smartphones';
  constructor(private router:Router, private productServ:CommonService){}
  tabssSelected='';
  filterrBtn: any;
  navigateTab(event:any){
 console.log(event);
 this.tabssSelected=event;
  }
  tabsSelected(type:any){
    this.filterrBtn=type;
    console.log(type);
    this.productServ.setValueBtn(this.filterrBtn);
   
    
}

 
}
