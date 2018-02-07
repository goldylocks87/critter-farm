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

  life: number;
  lifeBar: string;

  constructor(private battle: BattleService) {

  }

  ngOnInit() {
    this.life = this.critter.battleInfo.totalLife;
    this.lifeBar = this.life + '%';
  }

  doMove( move: BattleMove ) {
    console.log('~~~ move : ', move);
    this.battle.doMove( this.isChallenger, move.damage );
  }

}
