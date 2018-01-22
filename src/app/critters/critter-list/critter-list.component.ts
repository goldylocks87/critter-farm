import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { Critter } from '../../models/critter.model';
import { StorkService } from '../../services/stork.service';
import { CritterService } from '../../services/critter.service';

@Component({
  selector: 'app-critter-list',
  templateUrl: './critter-list.component.html',
  styleUrls: ['./critter-list.component.css']
})
export class CritterListComponent implements OnInit {

  critters: Critter[];
  parentIds: number[];

  readyForSex = new Subject<Critter[]>();

  constructor(private router: Router,
              private stork: StorkService,
              private critterService: CritterService) { }

  ngOnInit() {
    this.critters = this.critterService.getCritters();
    this.parentIds = [];

    // this.critters.push( new Critter('00011001') );
    // this.critters.push( new Critter('00010001') );
    // this.critters.push( new Critter('00101011') );
    // this.critters.push( new Critter('11001100') );
    // this.critters.push( new Critter('00001111') );
    // this.critters.push( new Critter('10101010') );
    // this.critters.push( new Critter('10001000') );
    // this.critters.push( new Critter('10000000') );
    // this.critters.push( new Critter('00001010') );
    // this.critters.push( new Critter('10101000') );
    // this.critters.push( new Critter('00101111') );
    // this.critters.push( new Critter('11111111') );
    // this.critters.push( new Critter('10010011') );
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
}
