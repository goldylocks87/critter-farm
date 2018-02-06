import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'critter farm';

  constructor() {}

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyDThc2FwvV-OmATCTlFf5VBdybBXeKCjhE',
      authDomain: 'critter-farm.firebaseapp.com',
      databaseURL: 'https://critter-farm.firebaseio.com',
      projectId: 'critter-farm',
      storageBucket: 'critter-farm.appspot.com',
      messagingSenderId: '785602661836'
    };
    firebase.initializeApp(config);
  }

}
