
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Critter } from '../models/critter.model';
import { DnaService } from './dna.service';

@Injectable()
export class StorkService {

  newChubArrival = new Subject<Critter>();

  mom: Critter;
  dad: Critter;
  babe: Critter;

  constructor(private dnaService: DnaService) {}

  makeBabe( dad: Critter, mom: Critter ) {

    this.dad = dad;
    this.mom = mom;

    this.babe = new Critter( this.mix() );
    this.newChubArrival.next( this.babe )
  }

  mix() {

    const dadAllelArray = this.dnaService.getAllels(this.dad.dna);
    const momAllelArray = this.dnaService.getAllels(this.mom.dna);

    let babedna = '';
    for( let i = 0; i < dadAllelArray.length; i = i + 2 ) {

      babedna += dadAllelArray[ this.random() ? i : i + 1 ];
      babedna += momAllelArray[ this.random() ? i : i + 1 ];
    }

    return babedna;
  }

  private random() {
    return Math.floor(Math.random() * 2) === 1;
  }
}
