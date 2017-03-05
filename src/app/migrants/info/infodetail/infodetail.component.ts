import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-infodetail',
  templateUrl: './infodetail.component.html',
  styleUrls: ['./infodetail.component.css']
})
export class InfodetailComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/migrant']);
  }

}
