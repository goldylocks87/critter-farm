import { Component, OnInit } from '@angular/core';

import { Critter } from '../models/critter.model';
import { BattleMove } from '../models/battle-move.model';
import { BattleInfo } from '../models/battle-info.model';
import { BattleService } from './battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [BattleService]
})
export class BattleComponent implements OnInit {

  challenger;
  opponent;

  constructor(private battle: BattleService) { }

  ngOnInit() {
  }

  onSelect( isChallenger: boolean, critter: Critter ) {

    console.log( isChallenger, critter );

    if( isChallenger ) {
      this.challenger = critter;
      this.battle.challenger = this.challenger;
    } else {
      this.opponent = critter;
      this.battle.opponent = this.opponent;
    }
  }

}
