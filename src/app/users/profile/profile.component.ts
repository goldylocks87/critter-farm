import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor() {
    this.user = {
      'name': 'Alec Myballz',
      'email': 'test@test.com'
    };
  }

  ngOnInit() {
  }

}
