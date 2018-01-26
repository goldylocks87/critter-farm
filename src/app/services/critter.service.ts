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
    return [  new Critter( '01011010' ),
              new Critter( '10100011' ),
              new Critter( '11011111' ),
              new Critter( '00111000' ),
              new Critter( '00100100' ) ];
  }

}
