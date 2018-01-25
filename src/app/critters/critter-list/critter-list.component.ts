import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { MatSnackBar } from '@angular/material';

import { Critter } from '../../models/critter.model';
import { StorkService } from '../../services/stork.service';
import { CritterService } from '../../services/critter.service';

@Component({
  selector: 'app-critter-list',
  templateUrl: './critter-list.component.html',
  styleUrls: ['./critter-list.component.css']
})
export class CritterListComponent implements OnInit, OnDestroy {

  crittersChanged: Subscription;
  newChubArrival: Subscription;

  critters: Critter[];
  parentIds = [];

  constructor(private router: Router,
              private stork: StorkService,
              private critterService: CritterService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.crittersChanged = this.critterService.crittersChanged
      .subscribe( (critters: Critter[]) => { this.critters = critters; } );
    this.critters = this.critterService.getCritters();

    this.newChubArrival = this.stork.newChubArrival
      .subscribe( (critter: Critter) => {

        this.snackBar.open('The storks just delivered a new lil chub, check out the breeding grounds!',
          critter.name, { duration: 5000 });

      });
  }

  selectForSex( index: number ) {

    const startLength = this.parentIds.length;

    const inArray = this.parentIds.indexOf(index);

    if( inArray == -1 ) { this.parentIds.push(index); }
    else { this.parentIds.splice( inArray, 1 ); }

    if( this.parentIds.length === 2 && startLength < 2 ) {
      let parents = [];
      for( let id of this.parentIds ) { parents.push( this.critters[id] ); }

      this.stork.makeBabe( parents[0], parents[1] );
      // this.router.navigate(['/breed']);
    }
    else if( this.parentIds.length > 2 && startLength < this.parentIds.length ) {
      this.snackBar.open('You selected to many critters....this aint an orgy',
        null, { duration: 5000 });
    }
  }

  checkOut( index: number ) {
    this.router.navigate(['/detail'], { queryParams: { id: index } });
  }

  ngOnDestroy() {
    this.crittersChanged.unsubscribe();
    this.newChubArrival.unsubscribe();
  }
}
