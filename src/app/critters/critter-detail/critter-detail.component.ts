import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router/';

import { Critter } from '../../models/critter.model';
import { CritterService } from '../../services/critter.service';

@Component({
  selector: 'app-critter-detail',
  templateUrl: './critter-detail.component.html',
  styleUrls: ['./critter-detail.component.css']
})
export class CritterDetailComponent implements OnInit {

  critter: Critter;

  constructor(private route: ActivatedRoute,
              private critterService: CritterService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.critter = this.critterService.getCritter(id);
      }
    );
  }

}
