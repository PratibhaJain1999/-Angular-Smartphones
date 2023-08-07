import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthServComponent } from './auth-serv/auth-serv.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { OurProductComponent } from './our-product/our-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabComponent } from './tab/tab.component';
import { ProductListComponent } from './our-product/product-list/product-list.component';
import { ProductDetailComponent } from './our-product/product-detail/product-detail.component';
import { CheckoutsComponent } from './checkouts/checkouts.component';
import { AdressDetailPageComponent } from './adress-detail-page/adress-detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthServComponent,
    HomeComponent,
    OurProductComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    TabComponent,
    ProductListComponent,
    ProductDetailComponent,
    CheckoutsComponent,
    AdressDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
