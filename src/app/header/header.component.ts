import { Component } from '@angular/core';
import { Response } from '@angular/http/';
import { Router } from '@angular/router/';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: ['nav { margin-bottom: 1rem; }']
})
export class HeaderComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Critters',
        link: './critters',
        index: 0
      }, {
        label: 'Breeding Grounds',
        link: './breed',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
