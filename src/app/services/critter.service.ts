import { Subject } from 'rxjs/Subject';

import { Critter } from '../models/critter.model';

export class CritterService {

  crittersChanged = new Subject<Critter[]>();
  private critters = [];
  private myCritters = [];

  constructor() {}

  getCritters() {
    return this.critters;
  }

  getCritter( index: number ) {
    return this.critters[index];
  }

  setCritters( critters: Critter[] ) {
    this.critters = critters;
    this.crittersChanged.next( this.critters );
  }

  getMyCritters() {
    return this.myCritters;
  }

  addToMyCritters( chub: Critter ) {
    this.myCritters.push( chub );
  }

  getSampleCritters() {
    return [  new Critter( '010110100000' ),
              new Critter( '101000111111' ),
              new Critter( '110111110000' ),
              new Critter( '001110001111' ),
              new Critter( '001001000000' ) ];
  }

}
