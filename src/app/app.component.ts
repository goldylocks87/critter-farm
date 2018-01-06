import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DnaService } from './services/dna.service';
import { Critter } from './models/critter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'critter farm';
  babe: Critter;
  eyes;
  body = '#9ec65e';

  constructor( private dnaService: DnaService ) {}

  ngOnInit() {
    this.babe = new Critter( '11111111' );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.babe = new Critter( value.dna );
  }

}
