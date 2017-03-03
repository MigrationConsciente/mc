import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import {MdSnackBar} from '@angular/material';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public countries = ['Benin', 'Burkina Faso', 'Cape Vert', 
                    'Cote d\'Ivoire', 'Gambie', 'Ghana', 'Guinea', 'Guinée-Bissau',
                    'Liberia', 'Mali',	'Niger', 'Nigeria', 'Sénégal', 'Sierra Leone', 
                    'Togo', 'Cameroon'];
public statut = ['Migrant', 'ONG', 'Entrepreneur(s)'];

public pays: string = null ;
public role: string = null ;

  constructor(public hs: HomeService, public snackBar: MdSnackBar, public af: AngularFire) { }

  ngOnInit() {
  }

    login(): any {
        this.af.auth.login().then(result => {
            this.hs.user = result;
            this.hs.pays = this.pays;
            this.hs.role = this.role;
            console.log(this.hs.user + ' pays' + this.hs.pays + ' role' + this.hs.role);
            this.hs.isLoggedIn = true;

            if (this.pays !== null && this.role !== null) {
                this.hs.nav(this.role);
              }else {
                this.snackBar.open('Vous devez remplir tout le formulaire ');
             }
           });

  }

  loginAsUser() {
   // this.hs.login();
  }
}
