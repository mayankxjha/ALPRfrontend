import {Component, OnInit} from '@angular/core';
import * as ol from 'ol'
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {View} from "ol";
import {Layer} from "ol/layer";
import LayerGroup from "ol/layer/Group";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  mapRender() {
    const map = new ol.Map({
      view: new View({
        center: [2059591.9636910656, 1691816.9128030376],
        zoom: 5,
        // maxZoom: 10,
        // minZoom: 4,
      }),
      target: 'js-map',

    });
    map.on('click', (event)=>{
      console.log(event)
    })
    const humanitarian = new TileLayer({
      source: new OSM({
        url:'https://{a-c}.tile.openstreetmap/fr/hot/{z}/{x}/{y}.png'
      }),
      visible: false,
    })
    const stamen = new TileLayer({
      source: new OSM({
        url:'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
        attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
      }),
      visible: false,
    })
    const standard = new TileLayer({
      source: new OSM(),
      visible: true,
    })
    const layerGrouped = new LayerGroup({
      layers: [
        stamen, standard, humanitarian
      ]
    })
    map.addLayer(layerGrouped);
  }

  ngOnInit() {
    this.mapRender()
  }
}
