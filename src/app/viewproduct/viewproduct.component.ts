import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  @Input() thisProduct
  //@Output() addToCart=new EventEmitter();
  constructor() { 
    
  }

  ngOnInit() {
  }
   addToCartFunction(event)
 {
  // this.addToCart=new EventEmitter();
//this.addToCart.emit(this.thisProduct)
 }
}
