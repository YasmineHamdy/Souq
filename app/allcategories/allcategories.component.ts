import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent implements OnInit {
  categories:any
  subcategories:any
  constructor() { 
    this.categories=["Mobile Phones","Perfumes","Bags"]
    this.subcategories=[{Parent:"Mobile Phones",Name:"Huawei",Products:["Huawei GR5","Huawei GR3"]},{Parent:"Mobile Phones",Name:"Samsung",Products:["Galaxy 3","A7"]},{Parent:"Perfumes",Name:"Women",Products:["Versace Woman"]},{Parent:"Bags",Name:"Hand Bag",Products:["Jeep"]},{Parent:"Bags",Name:"Back Bag",Products:["Active"]}]

  }

  ngOnInit() {
  }

}
