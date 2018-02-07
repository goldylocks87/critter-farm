import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CritterService } from './critter.service';
import { Critter } from '../models/critter.model';

@Injectable()
export class DataStorageService {

  token: string;

  constructor(private http: Http,
              private critterService: CritterService) {

    this.fetchCritters();
  }

  storeCritters() {
    this.http.put( 'https://critter-farm.firebaseio.com/critters.json', this.critterService.getCritters() )
      .subscribe( httpResponse => console.log(httpResponse) );
  }

  fetchCritters() {
    this.http.get( 'https://critter-farm.firebaseio.com/critters.json' )
      .subscribe(
        (response: Response) => {
          this.critterService.setCritters( response.json() ); // use response from WS
        }
      );
  }

  storeUserCritters( token: string ) {
    this.http.put( 'https://critter-farm.firebaseio.com/users/' + token + '/critters.json',
                    this.critterService.getUserCritters() )
      .subscribe( httpResponse => console.log(httpResponse) );
  }

  fetchUserCritters( token: string ) {
    this.http.get( 'https://critter-farm.firebaseio.com/users/' + token + '/critters.json' )
      .subscribe(
        (response: Response) => {
          this.critterService.setUserCritters( response.json() ); // use response from WS
        }
      );
  }

}
