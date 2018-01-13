
import { Injectable } from '@angular/core';

import { Critter } from '../models/critter.model';
import { DnaService } from './dna.service';

@Injectable()
export class StorkService {

  mom: Critter;
  dad: Critter;

  constructor(private dnaService: DnaService) {}

  makeBabe( dad: string, mom: string ) {

    this.dad = new Critter(dad, 'male');
    this.mom = new Critter(mom, 'female');

    console.log(this.dad);
    console.log(this.mom);

    this.mix();
    // console.log( Math.floor( Math.random() * 2 ) );
    // let dna = '100101011001010101';
    // console.log( this.parseDNA( dna ) );
  }

  mix() {
    console.log( this.dnaService.createGeneList(this.dad.dna) );
    console.log( this.dnaService.createGeneList(this.mom.dna) );
  }

}
