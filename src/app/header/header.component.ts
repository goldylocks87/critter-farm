import { Component } from '@angular/core';
import { Router } from '@angular/router/';
import { DataStorageService } from '../services/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isCollapsed = true; // toggles the hamburger dropdown
  isSettingsCollapsed = true; // toggles the setting dropdown

  constructor(private router: Router,
              private dataService: DataStorageService) {}

  storeCritters() {
    this.dataService.storeCritters();
  }
}
