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
public statut = ['Migrant', 'ONG', 'Entrepreneur(s)/ Sociétés'];

public domaineEnt = ['Agriculure', 'Elevage', 'Batiment', 'TIC', 'Autres' ];

public destination = ['France', 'Italie', 'Espagne', 'Allemagne', 'Autres'];
public trancheAge = [ 'Entre 14 et 18 ans', 'Entre 18 et 28 ans', 'Entre 28 et 40 ans', '40 et plus'];
public pays: string = null ;
public role: string = null ;
public dest: string = null;
public age: string = null;
public doesNeedFacebook: Boolean = false;
public ongName: String = '';
public ongPays: String = '';
public nomEntreprise: String = '';
public domEnt: String  = '';


  constructor(public hs: HomeService, public snackBar: MdSnackBar, public af: AngularFire) { }

  ngOnInit() {
  }

    login(): any {
//      if ( this.doesNeedFacebook === true ) { this.af.auth.login(); }

            if (this.role === 'Migrant') {

                const migrantData = {
                  'nationalité': this.pays,
                  'destination ': this.dest,
                  'trancheAge' : this.age
                };
                // Push to firebase
                this.hs.pushM(migrantData);


                this.hs.nav(this.role);
              }else if (this.role === 'ONG') {
                const ongData = {
                  'nom' : this.ongName,
                  'paysPrésents' : this.ongPays
                };
                this.hs.pushO(ongData);

                this.hs.nav(this.role);

              }else if (this.role === 'Entrepreneur(s)/ Sociétés') {
                const sociétéData = {
                  'nom' : this.nomEntreprise,
                  'domaine' : this.domEnt
                };

                this.hs.pushE(sociétéData);

                this.hs.nav(this.role);
              }else {
              this.snackBar.open('Veuillez répondre aux questions SVP');
          }


  }

  loginAsUser() {
   // this.hs.login();
  }
}
