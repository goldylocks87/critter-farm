
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Critter } from '../models/critter.model';
import { DnaService } from './dna.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StorkService {

  mom: Critter;
  dad: Critter;
  babe: Critter;

  constructor(private dnaService: DnaService,
              private snackBar: MatSnackBar) {}

  makeBabe( dad: Critter, mom: Critter ) {

    this.dad = dad;
    this.mom = mom;

    console.log( 'papa :', this.dad);
    console.log( 'mama :', this.mom);

    this.snackBar.open('The storks have delivered this chub!', null, {
      duration: 2000,
    });

    this.babe = new Critter( this.mix() );

    console.log( this.babe );
    return this.babe;
  }

  setParents( dad: Critter, mom: Critter ) {
    this.dad = dad;
    this.mom = mom;
  }

  getParents() {
    if( this.dad && this.mom ) { return [this.dad, this.mom]; }
    else { return null; }
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
