import { Injectable } from '@angular/core';

import { StorkService } from './stork.service';
import { Critter } from '../models/critter.model';

@Injectable()
export class DnaService {

  momDNA: string[];
  dadDNA: string[];

  constructor(private stork: StorkService) {}

  createPunnet( mom: string, dad: string ) {

    this.momDNA = this.chunk( mom, 4 );
    this.dadDNA = this.chunk( dad, 4 );

    let outcomes = [];

    outcomes.push( this.getEyeColor(this.momDNA[0]).substring(0, 1) + this.getEyeColor(this.dadDNA[0]).substring(1, 2) );
    outcomes.push( this.getEyeColor(this.momDNA[0]).substring(1, 2) + this.getEyeColor(this.dadDNA[0]).substring(1, 2) );
    outcomes.push( this.getEyeColor(this.dadDNA[0]).substring(0, 1) + this.getEyeColor(this.momDNA[0]).substring(1, 2) );
    outcomes.push( this.getEyeColor(this.dadDNA[0]).substring(0, 1) + this.getEyeColor(this.momDNA[0]).substring(0, 1) );

    console.log( 'punnett square :', outcomes );

    // junky code to refactor //

    const winningOutcome = outcomes[ Math.floor(Math.random() * outcomes.length) ];
    let babe = new Critter( winningOutcome, '' );

    const upperCase = winningOutcome.substring(0, 1).toUpperCase();
    if( winningOutcome.indexOf(upperCase) !== -1 ) { babe.eyeColor = '#965dc0'; }
    else { babe.eyeColor = '#57a0eb'; }

    return babe;
  }

  private chunk( dna: string, length: number ) {
    return dna.match( new RegExp('.{1,' + length + '}', 'g') );
  }

  private getEyeColor( allel: string ) {

    let gene = '';
    for( let half of this.chunk(allel, 2) ) {
      gene += this.getLetter(half);
    }

    return gene;
  }

  getLetter( half: string ) {
    switch( half ) {
      case '00': { return 'A'; }
      case '01': { return 'a'; }
      case '10': { return 'B'; }
      case '11': { return 'b'; }
      default: { break; }
    }
  }
}
