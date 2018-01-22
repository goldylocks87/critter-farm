import { Component } from '@angular/core';
import { Router } from '@angular/router/';
import { DataStorageService } from '../services/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: ['nav { margin-bottom: 1rem; }']
})
export class HeaderComponent {

  constructor(private router: Router,
              private dataService: DataStorageService) {}

  storeCritters() {
    this.dataService.storeCritters();
  }
}
