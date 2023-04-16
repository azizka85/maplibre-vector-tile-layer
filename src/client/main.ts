import maplibregl from 'maplibre-gl'

import 'maplibre-gl/dist/maplibre-gl.css'

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [-118.805, 34.027],
  zoom: 12
})

map.once('load', () => {
  map.addSource('parcels', {
    type: 'vector',
    tiles: [
      'https://vectortileservices3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Santa_Monica_Mountains_Parcels_VTL/VectorTileServer/tile/{z}/{y}/{x}.pbf'
    ]
  })

  map.addLayer({
    id: 'parcels-fill',
    type: 'fill',
    source: 'parcels',
    'source-layer': 'Santa_Monica_Mountains_Parcels',
    paint: {
      'fill-color': 'hsl(200, 80%, 50%)',
      'fill-opacity': 0.5,
      'fill-outline-color': 'white'
    }
  })
})
