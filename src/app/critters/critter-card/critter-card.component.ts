import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Critter } from '../../models/critter.model';

@Component({
  selector: 'app-critter-card',
  templateUrl: './critter-card.component.html',
  styleUrls: ['./critter-card.component.css']
})
export class CritterCardComponent implements OnInit {

  @Input() critter: Critter;
  @Input() displayDetails = true;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  calcAge( bday: Date ) {
    let age = ( Date.now() - new Date( bday ).getTime() ) / 3600000 / 24;
    age = Math.floor( age );
    return age + ' Days';
  }

  // click functions

  checkOut( index: number ) {
    this.router.navigate(['/detail'], { queryParams: { id: index } });
  }

}
