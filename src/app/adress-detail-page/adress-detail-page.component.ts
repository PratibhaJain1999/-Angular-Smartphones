import { Component } from '@angular/core';
import { CommonService } from '../product.service';

@Component({
  selector: 'app-adress-detail-page',
  templateUrl: './adress-detail-page.component.html',
  styleUrls: ['./adress-detail-page.component.css']
})
export class AdressDetailPageComponent {
  
  cartItem:any=[]
  totalAmount=0;
  cgst=0;
  sgst=0;
  discount=0;
  netAmount=0;
  constructor(private productServ:CommonService) {
    this.productServ.getAddToCart().subscribe((responsiveData) => {
      this.cartItem = responsiveData;
      this.cartItem.forEach((element:any) => {
        this.totalAmount=this.totalAmount + parseInt(element.price);
         });
      this.cgst = 10/100 * this.totalAmount;
      this.sgst = 10/100 * this.totalAmount;
      this.discount= 10/100 * this.totalAmount-10/100;
      this.netAmount = this.cgst + this.sgst - this.discount + this.totalAmount;
  })
  }
}
