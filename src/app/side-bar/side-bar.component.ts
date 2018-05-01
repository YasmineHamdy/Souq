import { Component, OnInit } from '@angular/core';
import { SideBarToggleService } from '../side-bar-toggle.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  sideBarStatus=false
  constructor(private service:SideBarToggleService) { }

  ngOnInit() {
    this.service.toggleSidebar.subscribe(()=>this.Toggle());
  }
  Toggle(){
    if(this.sideBarStatus==false){
      this.sideBarStatus=true;
    }
    else{
      this.sideBarStatus=false;
    }
  }
}
