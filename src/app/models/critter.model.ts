import { ReflectiveInjector } from '@angular/core';
import * as names from 'people-names';

import { BodyPattern } from './body-pattern.model';
import { DnaService } from '../services/dna.service';

export class Critter {

  dnaService: DnaService;

  constructor(public dna: string,
              public sex?: string,
              public geneList?: string[],
              public eyeColor?: string,
              public bodyColor?: string,
              public isMutant?: boolean,
              public name?: string,
              public bday?: Date,
              public stripe?: any,
              public bodyPattern?: BodyPattern) {

    // so that we dont have to provide the service in the constructor when creating critters
    this.dnaService = ReflectiveInjector.resolveAndCreate([DnaService]).get(DnaService);

    if( !this.geneList && this.dna.length >= 12 ) { this.createGenes(); }

  }

  private createGenes() {

    this.geneList = this.dnaService.createGeneList(this.dna);
    this.eyeColor = this.dnaService.getEyeColor( this.geneList[0] );
    this.bodyColor = this.dnaService.getBodyColor( this.geneList[1] );
    this.bodyPattern = this.dnaService.getBodyPattern( this.geneList[2] );
    this.isMutant = this.checkForMutation();

    if( !this.sex ) { this.sex = this.dnaService.determineSex(); }

    if( !this.name && this.sex ) { this.name = this.sex === 'male' ? names.maleRandomEn() : names.femaleRandomEn(); }

    if( !this.bday ) { this.bday = new Date(); }
  }

  private checkForMutation() {
    return Math.floor( Math.random() * 5 ) === 1;
  }
}
