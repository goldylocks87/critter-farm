import { Component } from '@angular/core';
import { Router } from '@angular/router/';

import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isCollapsed = true; // toggles the hamburger dropdown

  constructor(private router: Router,
              private dataService: DataStorageService,
              public authService: AuthService) {}


  onSaveData() {
    this.dataService.storeCritters();
    this.dataService.storeUserCritters( this.authService.getUserId() );
  }

  onFetchData() {
    this.dataService.fetchCritters();
  }

  onLogout() {
    this.authService.logout();
  }
}
