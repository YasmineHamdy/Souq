import { Component, OnInit } from '@angular/core';
import { SideBarToggleService } from '../side-bar-toggle.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  width=false
  constructor(private sideService: SideBarToggleService) { }

  ngOnInit() {
  }
  openNav(){
    if (this.width)
      {
        this.width=false
      }
    else{
      this.width=true
    }
    console.log("width"+this.width);
    this.sideService.toggleSideBar();
  }

}
