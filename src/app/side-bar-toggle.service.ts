import { Injectable , EventEmitter,Output} from '@angular/core';

@Injectable()
export class SideBarToggleService {

  constructor() { }
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();
  toggleSideBar(){
    this.toggleSidebar.emit();
  }
}
