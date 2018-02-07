import { Subject } from 'rxjs/Subject';

import { Critter } from '../models/critter.model';

export class CritterService {

  crittersChanged = new Subject<Critter[]>();
  userCrittersChanged = new Subject<Critter[]>();

  private critters = [];
  private userCritters = [];

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

  getUserCritters() {
    return this.userCritters;
  }

  setUserCritters( critters: Critter[] ) {
    this.userCritters = critters ? critters : [];
    this.userCrittersChanged.next( this.userCritters );
  }

  addToUserCritters( chub: Critter ) {
    this.userCritters.push( chub );
  }

  getSampleCritters() {
    return [  new Critter( '010110100000' ),
              new Critter( '101000111111' ),
              new Critter( '110111110000' ),
              new Critter( '001110001111' ),
              new Critter( '001001000000' ) ];
  }

}
