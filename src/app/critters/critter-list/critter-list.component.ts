import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

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

  critters: Critter[];
  parentIds: number[];

  readyForSex = new Subject<Critter[]>();

  constructor(private router: Router,
              private stork: StorkService,
              private critterService: CritterService) { }

  ngOnInit() {
    this.crittersChanged = this.critterService.crittersChanged.subscribe(
      (critters: Critter[]) => { this.critters = critters; console.log('~~~ critters from sub', critters); }
    );
    this.critters = this.critterService.getCritters();
    this.parentIds = [];
  }

  selectForSex( index: number ) {

    const inArray = this.parentIds.indexOf(index);

    if( inArray == -1 ) this.parentIds.push(index);
    else this.parentIds.splice( inArray, 1 );

    if( this.parentIds.length >= 2 ) {
      let parents = [];
      for( let id of this.parentIds ) { parents.push( this.critters[id] ); }

      this.readyForSex.next( parents );
      console.log(parents);
      this.stork.setParents( parents[0], parents[1] );
      this.router.navigate(['/breed']);
    }
  }

  checkOut( index: number ) {
    this.router.navigate(['/detail'], { queryParams: { id: index } });
  }

  ngOnDestroy() {
    this.crittersChanged.unsubscribe();
  }
}
