import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Critter } from '../../models/critter.model';
import { StorkService } from '../../services/stork.service';
import { CritterService } from '../../services/critter.service';

@Component({
  selector: 'app-my-critter-list',
  templateUrl: './my-critter-list.component.html',
  styleUrls: ['./my-critter-list.component.css']
})
export class MyCritterListComponent implements OnInit {

  crittersChanged: Subscription;
  newChubArrival: Subscription;

  critters: Critter[];
  parentIds = [];

  constructor(private router: Router,
              private stork: StorkService,
              private critterService: CritterService) { }

  ngOnInit() {

    // this.critters = this.critterService.getMyCritters();
    this.critters = this.critterService.getSampleCritters();
  }

  checkOut( index: number ) {
    this.router.navigate(['/detail'], { queryParams: { id: index } });
  }

  // ngOnDestroy() {
  //   this.crittersChanged.unsubscribe();
  //   this.newChubArrival.unsubscribe();
  // }
}
