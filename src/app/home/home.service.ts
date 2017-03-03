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
 public FirebaseUser: FirebaseListObservable<any>;

    constructor(public af: AngularFire, public router: Router) {
        this.FirebaseUser = af.database.list('/users');
     }
      logout() {
     this.af.auth.logout();
    }
// legroupepasse github legroupepasse1
    nav(role) {
        if (role === 'Migrant') {
            this.router.navigate(['/migrant']);
            this.pushUser();
        }else if (role === 'ONG') {
            this.router.navigate(['/ong']);
            this.pushUser();
        }else if (role === 'Entrepreneur(s)') {
            this.router.navigate(['/entrepreneurs']);
            this.pushUser();
        }else {
            console.log('Impossible de naviguer à cette adresse. Avez vous modifiéé le formulaire ?');
        }
    }

    pushUser() {
        const pushed = {
                    'name' : this.user.auth.displayName,
                    'email' : this.user.auth.email,
                    'pays' : this.pays,
                    'role' : this.role
                };

          this.FirebaseUser.push(pushed);
    }
}
