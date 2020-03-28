import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public latitude: number = 30.602161;
  public longitude: number = 114.302101;
  public zoom: number = 5;

  public previous;

  constructor() {
  }

  ngOnInit() {
  }

  clickedMarker(infowindow) {
    console.log('Click Marker');
  }

  public getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 10;
      });
    }
  }

}
