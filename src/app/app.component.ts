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
  babe = {
    dna: null,
    eyeColor: null
  };
  eyes;
  body = '#9ec65e';

  constructor( private dnaService: DnaService ) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.babe = this.dnaService.createPunnet( value.mom, value.dad );
    console.log(this.babe);
    this.eyes = this.babe['eyeColor'];

    this.generateBodyColor();
  }

  getEyeColor() {
    if( !this.babe ) return 'black';
    else return this.babe.eyeColor;
  }

  generateBodyColor() {

    const colors = ['#a35ec6', '#c65e93', '#c5c65e', '#9ec65e'];
    const color = colors[ Math.floor(Math.random() * colors.length) ];

    if( !this.babe ) this.body = 'black';
    else this.body = color;
  }

}
