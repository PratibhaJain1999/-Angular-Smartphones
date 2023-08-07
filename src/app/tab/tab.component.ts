import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../product.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  constructor( private productServ:CommonService) { }
  @Output()tabSelected=new EventEmitter()
  filteritems(type:any){
    console.log(type);
    this.productServ.setValueBtn(type);
    //this.tabSelected.emit(type)
    
    
  }

}
