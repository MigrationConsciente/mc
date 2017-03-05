import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
 public lat: Number;
 public lng: Number;
  constructor() {
      navigator.geolocation.watchPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console .log('lattitude' + this.lat + 'longitude' + this.lng);
      });

  }

  ngOnInit() {
  }

}
