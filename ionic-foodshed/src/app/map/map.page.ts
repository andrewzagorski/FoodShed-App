
import { Component, OnInit } from '@angular/core';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  ngOnInit(): void {
  }
  map: any;
  ionViewDidEnter() { // run when app is opened
    /*Initializing Map*/
    // tslint:disable-next-line: max-line-length
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWx6YWdvcnNraSIsImEiOiJjazJtZXF3MTEwaDdsM25sa2VzMG9nbHl0In0.CYoRFT7bS-EpX4l17qro-Q'; // token from previous group
    this.map = new mapboxgl.Map({ // initialize new map object
      style: 'mapbox://styles/alzagorski/ck6e0ghjy0q7n1io965s0ln07', // style defined by previous group
      center: [-89.405424, 43.073862], // adjusted center lat and longitude
      zoom: 15,
      pitch: 0,
      minZoom: 1, // restrict map zoom - buildings not visible beyond 13
      maxZoom: 18,
      container: 'map'
    });
    this.map.on('click', 'fridges', e => {

      var features = e.features;

      if (!features.length) {
        return;
      }

      var feature = features[0];

      const popup = new mapboxgl.Popup({ offset: popupOffsets })
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
        .setMaxWidth("250px")
        .addTo(this.map);
    });
    var markerHeight = 50, markerRadius = 1, linearOffset = 1;
    var popupOffsets = {
      'top': [0, 0],
      'top-left': [0, 0],
      'top-right': [0, 0],
      'bottom': [0, -markerHeight],
      'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
      'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
      'left': [markerRadius, (markerHeight - markerRadius) * -1],
      'right': [-markerRadius, (markerHeight - markerRadius) * -1]
    };

  }
}
