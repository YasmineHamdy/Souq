import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarToggleService } from './side-bar-toggle.service';
import { BodyComponent } from './body/body.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ProductComponent,
    ProfileComponent,
    SigninComponent,
    HeaderComponent,
    SideBarComponent,
    BodyComponent,
    AddProductComponent,
    SubCategoryComponent,
    ShopCartComponent,
    AllcategoriesComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'shop-cart',
        component:ShopCartComponent
      },
      {
       path:'allcategories',
       component:AllcategoriesComponent  
      }
    ])
  ],
  providers: [SideBarToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
