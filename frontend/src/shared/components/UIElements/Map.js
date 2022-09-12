import React, { useRef, useEffect } from 'react'
import * as ol from 'ol'
import * as X from 'ol/layer'
import * as Y from 'ol/source'
import * as Z from 'ol/proj'

import './Map.css'

const Map = (props) => {
  const mapRef = useRef()

  const { center, zoom } = props

  useEffect(() => {
    new ol.Map({
      target: mapRef.current.id,
      layers: [
        new X.Tile({
          source: new Y.OSM(),
        }),
      ],
      view: new ol.View({
        center: Z.fromLonLat([center.lng, center.lat]),
        zoom: zoom,
      }),
    })
  }, [center, zoom])

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  )
}

export default Map
