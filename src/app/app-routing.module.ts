import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthServComponent } from './auth-serv/auth-serv.component';
import { HomeComponent } from './home/home.component';
import { OurProductComponent } from './our-product/our-product.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'register', component:AuthServComponent},
  {path:'shopping-cart' , component:ShoppingCartComponent},
  {path:'', component:HomeComponent},
  {path:'product', component:OurProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
