import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  submitted=false
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form);
   // let product=new Product(form.value.productName,form.value.productDesc,form.value.productPrice,form.value.ProductPcs);

   // console.log(product.Pname)
  }

}
