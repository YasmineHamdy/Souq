import { Component, OnInit,DoCheck,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit,DoCheck {
 myProducts:any
total:Number
  constructor() {
   this.myProducts=[{productTitle:"Huawei GR5",img:"assets/imgs/GR5.jpeg",rate:"5",price:5000},{productTitle:"Huawei GR3",img:"assets/imgs/GR3.jpg",rate:"3",price:2000}]
   this.total=0
  }

  ngOnInit() {
    console.log(this.myProducts)
   
  }
  ngDoCheck(){
    this.total=0
    for(var i=0;i<this.myProducts.length;i++)
    {
        this.total+=this.myProducts[i].price
    }
  }
  checkoutFunction(event)
  {
    this.total=0
    this.myProducts=[]
  }
  deleteFunction(event)
  {
    for(var j=0;j<this.myProducts.length;j++)
    {
      if(this.myProducts[j].productTitle==event.target.id)
      {
         this.myProducts.splice(j,1)
        
      }
    }
  }
  addProduct(event)
  {
    console.log("event")
  }
}
