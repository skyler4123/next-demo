'use client'

import { useEffect } from "react";
import { Feature, Map, View } from 'ol';
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import 'ol/ol.css';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle"
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { Point } from "ol/geom";

const GeoJsonPage = () => {
  useEffect(() => {
    const map = new Map()
    const view = new View({
      center: [0, 0],
      zoom: 2
    })
    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM()
    })
    map.setTarget('map')
    map.setView(view)
    map.setLayers([osmLayer])
//////////////////////////////////
    const geojsonObject = 
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            -10000000,
            -700
          ],
          [
            35.162596461382236e5,
            11.484614282530728e5
          ]
        ],
        "type": "LineString"
      }
    }
    const vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(geojsonObject),
    });
    
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer)

    map.on('click', (event) => {
      console.log(event.coordinate)
    })
///////////////////////////////////





    return () => map.setTarget(undefined)
  }, [])

  return (
    <div id='map' className="w-full h-[400px]"></div>
  )
}

export default GeoJsonPage;