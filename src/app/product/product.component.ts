import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    new Product ('Huawei GR5','test product description', 5000 ,'assets/imgs/GR5.jpeg' ,10,'Ti shop',5,["It's a good product"]),
    new Product ('Huawei GR3','test product description', 3000 ,'assets/imgs/GR3.jpg' ,10,'Ti shop',3,["Not bad","It's good"]),
    ];
  constructor() { }

  ngOnInit() {
  }

}
