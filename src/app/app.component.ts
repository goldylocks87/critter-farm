import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DnaService } from './services/dna.service';
import { Critter } from './models/critter.model';
import { StorkService } from './services/stork.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'critter farm';
  babe: Critter;

  constructor(private dnaService: DnaService,
              private stork: StorkService ) {}

  ngOnInit() {
    // default babe
    this.babe = new Critter( '11111111' );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.babe = this.stork.makeBabe( value.daddna, value.momdna );
  }

}
