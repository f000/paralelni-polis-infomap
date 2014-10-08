/*
* Info mapa - Paralelni polis
* @author Lukas Vorlicek <lukas.vorlicek@codeart.cz>
* @licence CC BY-NC-ND 3.0 CZ
*/

/*global $,L*/

var markerData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Paralelní polis Institut, HUB, Café",
        "popupText": "Dělnická 43, Praha 7",
        "icon": "ppDropIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.450557172082, 50.103360372373]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Paralelní polis Party",
        "popupText": "Hala č. 7 a 8, Jateční ulice, Praha 7<br />pátek od 22:00 Afterparty – Cirk La Putyka<br />sobota od 22:00 	Afterparty – Cirk La Putyka",
        "icon": "ppDropIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.446482896599, 50.100153474297]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Palmovka",
        "popupText": "Metro B<br />Tramvaj denní 1, 14, 25<br />Bus denní 156, noční 505, 511",
        "icon": "metroBDropIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.47479629496, 50.103996909228]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Vltavská",
        "popupText": "Metro C<br />Tramvaj denní 1, 3, 8, 10, 12, 16, 25, noční: 52, 54, 55<br />Bus denní 109, noční 503, 513",
        "icon": "metroCDropIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.43851137141, 50.100170679256,]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Dělnická",
        "popupText": "Tramvaj denní 1, 12, 14, 25, noční 53, 54",
        "icon": "tramSquareIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.449985861573, 50.102551786343,]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Tusarova",
        "popupText": "Tramvaj denní 1, 14, 25",
        "icon": "tramSquareIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.450082421098, 50.10082446322]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Maniny",
        "popupText": "Tramvaj denní 1, 12, 14, 25, noční 53, 54",
        "icon": "tramSquareIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.452952384731, 50.103279514388]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Maniny",
        "popupText": "Bus denní 156",
        "icon": "busSquareIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.454203403255, 50.103289836692]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Osadní",
        "popupText": "Bus denní 156",
        "icon": "busSquareIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.446777939593, 50.103157366954]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Argentinská",
        "popupText": "Bus denní 156, noční 505, 511",
        "icon": "busSquareIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.443033575809, 50.102407271656]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupTitle": "Argentinská",
        "popupText": "Bus noční 505, 511",
        "icon": "busSquareIcon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14.443419813907, 50.103608106645]
      }
    }
  ]
},
polyData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [markerData.features[0].geometry.coordinates[0], 50.103243386301],
          [14.446895723643, 50.103198656262]
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [14.446895723643, 50.103198656262],
          [14.446987151892, 50.100717793815]
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [14.446987151892, 50.100717793815],
          [14.446525811939, 50.100738439525]
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [14.446525811939, 50.100738439525],
          [14.446547269611, 50.100442516831]
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [14.446547269611, 50.100442516831],
          [14.446295141964, 50.100449398775]
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [14.446295141964, 50.100449398775],
          [14.446295141964, markerData.features[1].geometry.coordinates[1]]
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [14.446295141964, markerData.features[1].geometry.coordinates[1]],
          [markerData.features[1].geometry.coordinates[0], markerData.features[1].geometry.coordinates[1]]
        ]
      }
    }
  ]
};


$(function() {
  $('#infomap').height(700);
  
  var map = L.map('infomap').setView([50.102, 14.45], 15);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var dropIcon = L.Icon.extend({
    options: {
      shadowUrl: 'img/markerShadow.png',
      iconSize:     [25, 41],
      shadowSize:   [41, 41],
      iconAnchor:   [14, 40],
      shadowAnchor: [4, 62],
      popupAnchor:  [0, -45]
    }
  }),
  squareIcon = L.Icon.extend({
    options: {
      shadowUrl: 'img/markerShadow.png',
      iconSize:     [25, 25],
      shadowSize:   [41, 41],
      iconAnchor:   [14, 15],
      shadowAnchor: [10, 40],
      popupAnchor:  [0, -25]
    }
  });
 
  var markerLayer = L.geoJson(markerData, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng);
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h3>' + feature.properties.popupTitle + '</h3>' + feature.properties.popupText);
      if(feature.properties.icon.indexOf("Square") > -1){
        layer.setIcon(new squareIcon({iconUrl: 'img/' + feature.properties.icon + '.png'}));
      }
      else{
        layer.setIcon(new dropIcon({iconUrl: 'img/' + feature.properties.icon + '.png'}));
      }
    }
  }).addTo(map);

  var polyLayer = L.geoJson(polyData, {
    style: {  color: "#12ff00",
              weight: 8
    }
  }).addTo(map);
  
});