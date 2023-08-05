import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()tabComponent=new EventEmitter()
  count=0
  showTab(type:any){
    this.tabComponent.emit(type)

  }


}
