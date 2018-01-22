import { Critter } from '../models/critter.model';

export class CritterService {

  critters: Critter[];

  constructor() {
    this.critters = [];
    this.critters.push( new Critter('00011001') );
    this.critters.push( new Critter('00010001') );
    this.critters.push( new Critter('00101011') );
    this.critters.push( new Critter('11001100') );
    this.critters.push( new Critter('00001111') );
    this.critters.push( new Critter('10101010') );
    this.critters.push( new Critter('10001000') );
    this.critters.push( new Critter('10000000') );
    this.critters.push( new Critter('00001010') );
    this.critters.push( new Critter('10101000') );
    this.critters.push( new Critter('00101111') );
    this.critters.push( new Critter('11111111') );
    this.critters.push( new Critter('10010011') );
  }

  getCritters() {
    return this.critters;
  }

  getCritter( index: number ) {
    return this.critters[index];
  }

}
