import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
seller:boolean = false;
  constructor() { 
      
  }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form);
  }
  sellerMode(){
  this.seller=true;}
}
