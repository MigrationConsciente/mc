import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

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
public statut = ['Immigrant', 'Immigré', 'ONG', 'Entrepreneur(s)'];

public pays: string = null ;
public role: string = null ;
  constructor(public hs: HomeService) { }

  ngOnInit() {
  }
  login(){
    this.hs.login();
  }
}
