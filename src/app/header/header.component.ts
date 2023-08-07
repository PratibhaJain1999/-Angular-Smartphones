import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()tabComponent=new EventEmitter()
  count:any
  showTab(type:any){
    this.tabComponent.emit(type)
    }
  constructor(private commonSer: CommonService) {
   }
   ngOnInit():void{
    this.commonSer.getCount().subscribe((res) =>{
      this.count = res;
      })
   }
  }
