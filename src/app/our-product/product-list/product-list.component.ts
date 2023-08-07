import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  itemsList = [
    {
      id: '1',
      type: 'oppo',
      name: 'Oppo A17 pro',
      price: '13000',
      imagePath: 'oppo a17.jpg.jpg',
      description: 'Choose a phone that brings out the best in you and provides smooth operation. '

    },
    {
      id: '2',
      type: 'apple',
      name: 'Apple iPhone-12-rl',
      price: '45000',
      imagePath: 'apple-iphone-12-r1.jpg.jpg',
      description: '	Announced	2020, October 13.Available. Released 2020, October 23'
    },
    {
      id: '3',
      type: 'samsung',
      name: 'Samsung Galaxy a22',
      price: '18000',
      imagePath: 'samsunggalaxya22.jpg.webp',
      description: '2021, June 03 Released 2021, July 01'
    },
    {
      id: '4',
      type: 'realme',
      name: 'Realme-5-Pro',
      price: '10500',
      imagePath: 'Realme-5-Pro-I.jpg.webp',
      description: '2021, June 03 Status	Available. Released 2021, July 01'
    },
    {
      id: '5',
      type: 'vivo',
      name: 'Vivo-y73',
      price: '10000',
      imagePath: 'vivo-y73.jpg.jpg',
      description: 'Technology	GSM / HSPA / LTE LAUNCH	Announced	2021, June 10 Status	Available. Released 2021, June 12'

    },
    {
      id: '6',
      type: 'oppo',
      name: 'Oppo a53',
      price: '11000',
      imagePath: 'oppo a53 5g.jpg.jpeg',
      description: '	GSM / HSPA / LTE LAUNCH	Announced	2020, August 20Status	Available. Released 2020, August 25'
    },
    {
      id: '7',
      type: 'apple',
      name: 'Apple-iPhone-14',
      price: '45000',
      imagePath: 'Apple-iPhone-14.jpg.webp',
      decription: '15.40 cm (6.1-inch) Super Retina XDR display Advanced camera system for better photos in any light'
    },
    {
      id: '8',
      type: 'samsung',
      name: 'Samsung galaxy s22',
      price: '70000',
      imagePath: 'samsung galaxy s22.jpg.webp',
      description: 'Pro-grade Camera that lets you make your nights epic with Nightography: It�s our brightest innovation yet.'
    },
    {
      id: '9',
      type: 'realme',
      name: 'Realme-7',
      price: '45000',
      imagePath: 'realme-7.jpg.webp',
      description: 'Take advantage of this realme smartphone’s 64 MP quad camera and click stunning photos'
    },
    {
      id: '10',
      type: 'vivo',
      name: 'Vivo v-20',
      price: '40000',
      imagePath: 'vivo-v20.jpg.jpg',
      description: 'With the stunning and innovative camera technologies of the Vivo V20 Pro, you can become a social media star with clear, detailed, and vivid photos and high-quality videos'
    },
    {
      id: '11',
      type: 'oppo',
      name: 'Oppo a54-5g',
      price: '70000',
      imagePath: 'a54-5g-Awesome-Violet oppo.jpg.webp',
      sescription: 'For seamless, uninterrupted, and reliable mobile computing, OPPO presents the OPPO A54.'
    },
    {
      id: '12',
      type: 'apple',
      name: ' iPhone-13',
      price: '40000',
      imagePath: 'iphone-13.jpg.jpg',
      description: '  iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity',
    }, {
      id: '13',
      type: 'samsung',
      name: 'Samsung galaxy s21',
      price: '55000',
      imagePath: 'Samsung galaxy s21.jpg.jpg',
      description: 'Click photos and record up to 8K videos like a pro on the Samsung Galaxy S21 Ultra smartphone. Get ready to capture images that are rich in color and feature incredible details, thanks to its 108 MP camera setup and 100x Space Zoom'
    }, {

      id: '14',
      type: 'realme',
      name: 'Realme-8-pro',
      price: '45000',
      imagePath: 'realme-8-pro.jpg.webp',
      description: 'The realme 8 Pro features a Tilt-shift mode and the Tilt-shift Time Lapse video so that you can add a creative perspective to the content that you create. '
    },
    {
      id: '15',
      type: 'vivo',
      name: 'Vivo-V-19',
      price: '55000',
      imagePath: 'Vivo-V19-Neo.jpg.webp',
      description: ' Enjoy a true blue smartphone experience with the V19 handset from Vivo. '
    }
  ]
  filterBtn: any = [];
  filterrBtn: any;
  cartItems: any =[];
   flag=false;
  
  constructor(private router: Router, private productServ: CommonService) {
    this.productServ.getValueBtn().subscribe((value) => {
      if (value == 'all') {
        this.filterBtn = this.itemsList
      }
      else {
        this.filterBtn = this.itemsList.filter(x => x.type == value)
      }
    });
  }
  ngOnInit(): void {
    this.filterBtn = this.itemsList
  }
    openDetails(id: any) {
    console.log(id);
    this.router.navigate(['/phone-details/' + id])
  }
 tabsSelected(type: any) {
    this.filterrBtn = type;
    console.log(type);
    this.productServ.setValueBtn(this.filterrBtn);
  }
  addCartItems(data:any,event:any){
    event.stopPropagation();
    this.cartItems.push(data);
    this.productServ.setAddToCart(this.cartItems);
    this.flag=true;
    Swal.fire(
      'Successfully',
      'Your items are successfully added',
      'success'
    )
    this.productServ.setTotalCount(this.cartItems.length)
   }
  }

