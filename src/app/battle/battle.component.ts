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

  challenger = new Critter('111111111111');
  opponent = new Critter('000000000000');

  constructor(private battle: BattleService) {
    this.battle.challenger = this.challenger;
    this.battle.opponent = this.opponent;
  }

  ngOnInit() {
  }

}
