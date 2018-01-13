import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { DnaService } from './services/dna.service';
import { Critter } from './models/critter.model';
import { StorkService } from './services/stork.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'critter farm';
  dad: Critter;
  mom: Critter;
  babe: Critter;

  constructor( private stork: StorkService ) {}

  ngOnInit() {
    // default babe
    this.babe = new Critter( '11111111' );
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    this.dad = new Critter(value.daddna, 'male');
    this.mom = new Critter(value.momdna, 'female');

    this.babe = this.stork.makeBabe( this.dad, this.mom );
  }

}
