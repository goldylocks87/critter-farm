import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

// import { DnaService } from './services/dna.service';
import { Critter } from '../models/critter.model';
import { StorkService } from '../services/stork.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

  subscription: Subscription;
  @ViewChild('f') form: NgForm;

  dad: Critter;
  mom: Critter;
  babe: Critter;

  constructor( private stork: StorkService ) {}

  ngOnInit() {
    // default babe
    this.babe = new Critter( '11111111' );

    const parents = this.stork.getParents();

    if( parents !== null ) {

      this.dad = new Critter(parents[0].dna, 'male');
      this.mom = new Critter(parents[1].dna, 'female');

      this.babe = this.stork.makeBabe(parents[0],parents[1]);

      // this.form.setValue({ daddna: parents[0].dna, momdna: parents[1].dna });
    }
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    this.dad = new Critter(value.daddna, 'male');
    this.mom = new Critter(value.momdna, 'female');

    this.babe = this.stork.makeBabe( this.dad, this.mom );
  }

}
