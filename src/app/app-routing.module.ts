import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthServComponent } from './auth-serv/auth-serv.component';
import { HomeComponent } from './home/home.component';
import { OurProductComponent } from './our-product/our-product.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabComponent } from './tab/tab.component';
import { ProductListComponent } from './our-product/product-list/product-list.component';
import { ProductDetailComponent } from './our-product/product-detail/product-detail.component';
import { CheckoutsComponent } from './checkouts/checkouts.component';
import { AdressDetailPageComponent } from './adress-detail-page/adress-detail-page.component';

const routes: Routes = [
  {path:'register', component:AuthServComponent},
  {path:'shopping-cart', component:ShoppingCartComponent},
  {path:'', component:HomeComponent},
  {path:'product', component:ProductListComponent},
  {path:'tabs', component:TabComponent},
  {path:'phone-details/:id', component:ProductDetailComponent},
  {path:'checkouts', component:CheckoutsComponent},
  {path:'checkouts-address-details', component:AdressDetailPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
