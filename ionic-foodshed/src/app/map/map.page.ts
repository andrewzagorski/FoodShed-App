
import { Component, OnInit } from '@angular/core';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  markers: any[];
  map: any;
  constructor() {
    this.markers = []; // TODO: initialize array of markers
  }
  ionViewDidEnter() { // run when app is opened
    /*Initializing Map*/
    // tslint:disable-next-line: max-line-length
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWVjaGFuIiwiYSI6ImNqbXd4ZmYzYTA0eWcza3J0NzVsNnNkcWoifQ.PQuBcFIs9STCQ6uf8DrJNw'; // token from previous group
    this.map = new mapboxgl.Map({ // initialize new map object
      style: 'mapbox://styles/aechan/cjmwxodn95lir2rmoq60ydb3m', // style defined by previous group
      //center: [-89.4125, 43.0766], // center lat and longitude
      center: [-89.405424, 43.073862], // adjusted center lat and longitude
      zoom: 15,
      pitch: 0,
      minZoom: 1, // restrict map zoom - buildings not visible beyond 13
      maxZoom: 18,
      container: 'map'
    });
    // add a single marker
    //var marker = new mapboxgl.Marker()
    //  .setLngLat([-89.4125, 43.0766])
    //  .addTo(this.map);
    var marker = new mapboxgl.Marker()
      .setLngLat([-89.412213, 43.074975])
      .addTo(this.map);

    var marker2 = new mapboxgl.Marker()
      .setLngLat([-89.398564, 43.072439])
      .addTo(this.map);  
    
    var markerHeight = 50, markerRadius = 1, linearOffset = 1;
    var popupOffsets = {
    'top': [0, 0],
    'top-left': [0,0],
    'top-right': [0,0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
    };

    //need to figure out how to only open when marker is clicked

    this.map.on('click', marker=>{
      const result = this.map.queryRenderedFeatures({object: marker})
      if (result.length){
        const popup = new mapboxgl.Popup({offset: popupOffsets})
        .setLngLat([-89.398564, 43.072439])
        .setHTML("<h1>Student Activity Center: 333 East Campus Mall, Room 4301 </h1>")
        .setMaxWidth("300px")
        .addTo(this.map);
    })

  }

  ngOnInit() { }
}
