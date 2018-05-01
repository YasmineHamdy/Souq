import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    new Product ('a test','test product description', 3000 ,'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/y6-2017/y6-2017-listimage-black.png' ,10,'Ti shop'),
    new Product ('a test','test product description', 3000 ,'https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/13459-21-1.jpg' ,10,'Ti shop'),
    ];
  constructor() { }

  ngOnInit() {
  }

}
