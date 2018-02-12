import { Component, Input, OnInit } from '@angular/core';

import { Critter } from '../../models/critter.model';
import { BattleMove } from '../../models/battle-move.model';
import { BattleService } from '../battle.service';

@Component({
  selector: 'app-battle-card',
  templateUrl: './battle-card.component.html',
  styleUrls: ['./battle-card.component.css']
})
export class BattleCardComponent implements OnInit {

  @Input() critter: Critter;
  @Input() isChallenger: boolean;

  constructor(private battle: BattleService) {

  }

  ngOnInit() {

  }

  doMove( index: number ) {

    const move = this.critter.battleInfo.moves[index];
    move.quantity--;
    console.log('~~~ move : ', move);
    this.battle.doMove( this.isChallenger, move.damage );
  }

}
