import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class HomeService {
 public user;
 public isLoggedIn: Boolean = false;
 public role: String;
 public pays: String;

    constructor(public af: AngularFire, public router: Router) { }
      logout() {
     this.af.auth.logout();
    }

    nav(role) {
        if (role === 'Migrant') {
            this.router.navigate(['/migrant']);
        }else if (role === 'ONG'){
            this.router.navigate(['/ong']);
        }else if (role === 'Entrepreneur(s)') {
            this.router.navigate(['/entrepreneurs']);
        }else {
            console.log('Impossible de naviguer à cette adresse. Avez vous modifiéé le formulaire ?')
        }
    }
}
