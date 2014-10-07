/*
* Info mapa - Paralelni polis
* @author Lukas Vorlicek <lukas.vorlicek@codeart.cz>
* @licence CC BY-NC-ND 3.0 CZ
*/

/*global $,L*/

$(function() {
  $('#infomap').height(700);
  
  var map = L.map('infomap').setView([50.102, 14.45], 17);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var LeafIcon = L.Icon.extend({
    options: {
      shadowUrl: 'img/marker-shadow.png',
      iconSize:     [25, 41],
      shadowSize:   [41, 41],
      iconAnchor:   [14, 40],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
    }
  });
  var ppIcon = new LeafIcon({iconUrl: 'img/marker-pp.png'});

  var conMarker = L.marker([50.103360372373, 14.450557172082], {icon: ppIcon}).addTo(map);
  conMarker.bindPopup("PP Conference - Dělnická 43, Praha 7");
     
  var partyMaker = L.marker([50.100153474297, 14.446482896599], {icon: ppIcon}).addTo(map);
  partyMaker.bindPopup("PP Party - Hala č. 7 a 8, Jateční ulice, Praha 7");
});