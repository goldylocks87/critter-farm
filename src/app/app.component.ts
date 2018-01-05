import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DnaService } from './services/dna.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'critter farm';
  eyes: string;

  constructor( private dnaService: DnaService ) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.eyes = this.dnaService.createPunnet( value.mom, value.dad );
  }

  getEyeColor() {
    if( !this.eyes ) return 'black';
    else return this.eyes;
  }

}
