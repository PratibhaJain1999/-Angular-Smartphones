import { Component } from '@angular/core';
import { CommonService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  totalAmount = 0;
  cgst = 0;
  sgst = 0;
  discount = 0;
  netAmount = 0;
  cartItem: any = []
  restList: any;
  details: any;

  constructor(private router: Router, private route: ActivatedRoute, private productServ: CommonService) {
    this.restList = this.route.snapshot.params['id'];
    this.details = this.cartItem.filter((x: any) => x.id == this.restList)
  }
  ngOnInit(): void {
    this.productServ.getAddToCart().subscribe((responsiveData) => {
      this.cartItem = responsiveData;
      this.cartItem.forEach((element: any) => {
        this.totalAmount = this.totalAmount + parseInt(element.price);
      });
      this.cgst = 10 / 100 * this.totalAmount;
      this.sgst = 10 / 100 * this.totalAmount;
      this.discount = 10 / 100 * this.totalAmount - 10 / 100;
      this.netAmount = this.cgst + this.sgst - this.discount + this.totalAmount;
    })
  }
  takeMeHome() {
    this.router.navigate(['']);
  }
  ourProduct() {
    this.router.navigate(['/product/']);
  }
  continueShipping() {
    this.router.navigate(['/product/']);
  }
  checkOut() {
    this.router.navigate(['/checkouts/']);
  }
  deleteItem(item: any) {
    let index = this.cartItem.indexOf(item)
    this.cartItem.splice(index, 1)
    this.productServ.setTotalCount(this.cartItem.length)
  }
  viewItem(item: any) {
    this.router.navigate(['/phone-details/' + item.id])
  }
}
