import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title: string = 'Google Maps';
  lat: number = 50.83570;
  lng: number = 4.37062;

  markerLat: number;
  markerLng: number;

  onChoseLocation(event){
    console.log(event);
    this.markerLat = event.coords.lat;
    this.markerLng = event.coords.lng;
  }

  constructor() { }

  ngOnInit() {
  }

}
