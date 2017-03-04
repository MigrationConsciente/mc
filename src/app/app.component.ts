import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  load: Boolean;
  constructor(public router: Router, public snack: MdSnackBar) { }
  goToProfil() {
    this.router.navigate(['/profil']);
  }
  createUrgence () {
    this.load = true;
    setTimeout( () => { this.load = false;
                        this.snack.open('message d\'urgence envoyé');
                      } , 2000);
    }
}
// short link https://goo.gl/LNZO87
