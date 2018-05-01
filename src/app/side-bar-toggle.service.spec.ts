import { TestBed, inject } from '@angular/core/testing';

import { SideBarToggleService } from './side-bar-toggle.service';

describe('SideBarToggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideBarToggleService]
    });
  });

  it('should be created', inject([SideBarToggleService], (service: SideBarToggleService) => {
    expect(service).toBeTruthy();
  }));
});
