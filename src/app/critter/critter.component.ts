import { Component, OnInit, Input } from '@angular/core';

import { Critter } from '../models/critter.model';

@Component({
  selector: 'app-critter',
  templateUrl: './critter.component.html',
  styleUrls: ['./critter.component.css']
})
export class CritterComponent implements OnInit {

  @Input() critter: Critter;

  constructor() { }

  ngOnInit() {
  }

}
