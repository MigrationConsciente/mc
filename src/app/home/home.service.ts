import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class HomeService {

    constructor(public af: AngularFire) { }
      login() {
        this.af.auth.login().then(result => console.log(result)) ;
    }
      logout() {
     this.af.auth.logout();
    }
}
