import { Injectable } from '@angular/core';

import { Critter } from '../models/critter.model';

@Injectable()
export class DnaService {

  constructor() {}

  public determineSex() {
    return Math.floor(Math.random() * 2) === 1 ? 'male' : 'female';
  }

  public getEyeColor( gene: string ) {
    if( gene.indexOf('A') !== -1 && gene.indexOf('B') !== -1 ) {
      return '#965dc0'; // dark green
    }
    else if( gene.indexOf('A') !== -1 ) {
      return 'brown';
    }
    else if( gene.indexOf('B') !== -1 ) {
      return 'LightGreen';
    }
    else if( gene.indexOf('a') !== -1 && gene.indexOf('b') !== -1 ) {
      return '#57a0eb'; // blue
    }
    else if( gene.indexOf('a') ) {
      return '#57a0eb'; // blue
    }
    else if( gene.indexOf('b') ) {
      return 'black'; // black
    }
    else {
      return '#57a0eb'; // blue
    }
  }

  public getBodyColor( gene: string ) {
    if( gene.indexOf('A') !== -1 && gene.indexOf('B') !== -1 ) {
      return '#a35ec6'; // purple
    }
    else if( gene.indexOf('A') !== -1 ) {
      return '#c65e93'; // pink
    }
    else if( gene.indexOf('B') !== -1 ) {
      return '#9ec65e'; // green
    }
    else if( gene.indexOf('a') !== -1 && gene.indexOf('b') !== -1 ) {
      return '#c5c65e'; // yellow
    }
    else if( gene.indexOf('a') ) {
      return '#c5c65e'; // yellow
    }
    else if( gene.indexOf('b') ) {
      return 'black'; // black
    }
    else {
      return '#c5c65e'; // yellow
    }
  }

  public getBodyPattern( gene: string ) {
    if( gene.indexOf('A') !== -1 && gene.indexOf('B') !== -1 ) {
      return 0; // none
    }
    else if( gene.indexOf('A') !== -1 ) {
      return 0; // none
    }
    else if( gene.indexOf('B') !== -1 ) {
      return 0; // none
    }
    else if( gene.indexOf('a') !== -1 && gene.indexOf('b') !== -1 ) {
      return 0; // none
    }
    else if( gene.indexOf('a') ) {
      return 1; // stripes
    }
    else if( gene.indexOf('b') ) {
      return 1; // stripes
    }
    else {
      return 0; // none
    }
  }

  public createGeneList( dna: string ) {
    const dnaList = this.createDnaList(dna);
    let genes = [];
    for( let piece of dnaList ) {
      genes.push( this.getGene(piece) );
    }
    return genes;
  }

  public getAllels( dna: string ) {
    return this.chunk( dna, 2 );
  }

  // private utilities

  private createDnaList( dna: string ) {
    return this.chunk( dna, 4 );
  }

  private getGene( allel: string ) {

    let gene = '';
    for( let half of this.chunk(allel, 2) ) {
      gene += this.getLetter(half);
    }

    return gene;
  }

  private getLetter( half: string ) {
    switch( half ) {
      case '00': { return 'A'; }
      case '01': { return 'a'; }
      case '10': { return 'B'; }
      case '11': { return 'b'; }
      default: { break; }
    }
  }

  private chunk( dna: string, length: number ) {
    return dna.match( new RegExp('.{1,' + length + '}', 'g') );
  }

}
