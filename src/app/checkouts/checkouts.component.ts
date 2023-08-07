import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.css']
})
export class CheckoutsComponent {
  constructor(private router: Router, private productServ: CommonService) {}

  onSubmit(form:any){
    console.log(form);
this.router.navigate(['/checkouts-address-details/'])
 }
}
