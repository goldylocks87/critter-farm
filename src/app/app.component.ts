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
  babe: object;
  eyes;

  constructor( private dnaService: DnaService ) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.babe = this.dnaService.createPunnet( value.mom, value.dad );
    console.log(this.babe);
    this.eyes = this.babe['eyes'];
  }

  getEyeColor() {
    if( !this.babe ) return 'black';
    else return this.babe.eyes;
  }

}
