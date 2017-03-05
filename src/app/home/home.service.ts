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
 public uid: String;
 public FirebaseMigrants: FirebaseListObservable<any>;
 public FirebaseOng: FirebaseListObservable<any>;
 public FirebaseEntreprises: FirebaseListObservable<any>;

    constructor(public af: AngularFire, public router: Router) {
        this.FirebaseMigrants = af.database.list('/migrants');
        this.FirebaseOng = af.database.list('/ongs');
        this.FirebaseEntreprises = af.database.list('/entreprises');
     }
      logout() {
     this.af.auth.logout();
    }
// legroupepasse github legroupepasse1
    nav(role) {
        if (role === 'Migrant') {
            this.router.navigate(['/migrant']);

        }else if (role === 'ONG') {
            this.router.navigate(['/ong']);

        }else if (role === 'Entrepreneur(s)/ Sociétés') {
            this.router.navigate(['/entrepreneurs']);

        }else {
            console.log('Impossible de naviguer à cette adresse. Avez vous modifiéé le formulaire ?');
        }
    }

    pushM(data) {
          this.FirebaseMigrants.push(data);

    }

    pushO (data) {
         this.FirebaseOng.push(data);
    }

    pushE (data) {
        this.FirebaseEntreprises.push(data);
    }
}
