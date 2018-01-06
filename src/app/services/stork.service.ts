import { Critter } from '../models/critter.model';

export class StorkService {

  mom: Critter;
  dad: Critter;

  makeBabe( /* mom: Critter, dad: Critter */ ) {
    console.log( Math.floor( Math.random() * 2 ) );
    let dna = '100101011001010101';
    // console.log( this.parseDNA( dna ) );
  }
}
