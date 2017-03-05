import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { InfodetailComponent } from './infodetail/infodetail.component';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  infodetail() {
    this.router.navigate(['/detailone']);
  }

  infodetailtwo() {
    this.router.navigate(['/detailtwo']);
  }
}
