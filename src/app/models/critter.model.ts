import { ReflectiveInjector } from '@angular/core';

import { DnaService } from '../services/dna.service';

export class Critter {

  dnaService: DnaService;

  constructor(public dna: string,
              public eyeColor?: string,
              public bodyColor?: string,
              public geneList?: string[]) {

    // so that we dont have to provide the service in the constructor when creating critters
    this.dnaService = ReflectiveInjector.resolveAndCreate([DnaService]).get(DnaService);

    if( !this.geneList && this.dna.length >= 8 ) { this.createGenes(); }

    console.log(this);
  }

  createGenes() {
    this.geneList = this.dnaService.createGeneList(this.dna);
    this.eyeColor = this.dnaService.getEyeColor( this.geneList[0] );
    this.bodyColor = this.dnaService.getBodyColor( this.geneList[1] );

    console.log(this.geneList);
  }
}
