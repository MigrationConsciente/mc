import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-infodetailtwo',
  templateUrl: './infodetailtwo.component.html',
  styleUrls: ['./infodetailtwo.component.css']
})
export class InfodetailtwoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/migrant']);
  }
}
