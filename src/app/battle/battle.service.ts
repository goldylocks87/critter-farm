import { Critter } from '../models/critter.model';

export class BattleService {

  challenger: Critter;
  opponent: Critter;

  doMove( isChallener: boolean, amount: number) {

    if( isChallener ) {
      const life = this.opponent.battleInfo.totalLife - amount;
      this.opponent.battleInfo.totalLife = life > 0 ? life : 0;

    } else {
      const life = this.challenger.battleInfo.totalLife - amount;
      this.challenger.battleInfo.totalLife = life > 0 ? life : 0;

    }
  }


}
