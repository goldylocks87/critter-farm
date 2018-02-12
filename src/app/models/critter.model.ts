import { ReflectiveInjector } from '@angular/core';
import * as names from 'people-names';

import { BodyPattern } from './body-pattern.model';
import { BattleInfo } from './battle-info.model';
import { DnaService } from '../services/dna.service';
import { BattleMove } from './battle-move.model';

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
              public bodyPattern?: BodyPattern,
              public battleInfo?: BattleInfo) {

    // so that we dont have to provide the service in the constructor when creating critters
    this.dnaService = ReflectiveInjector.resolveAndCreate([DnaService]).get(DnaService);

    if( this.dna.length >= 12 ) { this.createGenes(); }
    if( !this.battleInfo ) { this.createBattleData(); }

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

  private createBattleData() {
    this.battleInfo = new BattleInfo();
    this.battleInfo.totalLife = 100;
    this.battleInfo.level = 1;
    this.battleInfo.moves = this.createMoveList();
  }

  private createMoveList(): BattleMove[] {

    const movelist = [];

    const move1 = new BattleMove();
    move1.name = 'Slap';
    move1.damage = this.getRandomNum(10);
    move1.quantity = 10;
    movelist.push(move1);

    const move2 = new BattleMove();
    move2.name = 'Kick';
    move2.damage = this.getRandomNum(20);
    move2.quantity = 5;
    movelist.push(move2);

    const move3 = new BattleMove();
    move3.name = 'Punch';
    move3.damage = this.getRandomNum(10);
    move3.quantity = 10;
    movelist.push(move3);

    const move4 = new BattleMove();
    move4.name = 'Headbutt';
    move4.damage = this.getRandomNum(30);
    move4.quantity = 3;
    movelist.push(move4);

    return movelist;
  }

  private getRandomNum( maxNum: number ): number {
    return Math.floor( Math.random() * maxNum );
  }
}
