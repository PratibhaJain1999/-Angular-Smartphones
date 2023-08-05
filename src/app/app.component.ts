import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Smartphones';
  tabSelected='';
  navigateTab(event:any){
 console.log(event);
 this.tabSelected=event;
  }
 
}
