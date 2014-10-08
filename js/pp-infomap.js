/*
* Info mapa - Paralelni polis
* @author Lukas Vorlicek <lukas.vorlicek@codeart.cz>
* @licence CC BY-NC-ND 3.0 CZ
*/

/*global jQuery,$,L*/

var markerData = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "popupTitle": "Paraleln\u00ED Polis Hackers Congress",
                    "popupText": "Institut, HUB, Café<br />D\u011Blnick\u00E1 43, Praha 7<br /><a href='http://www.paralelnipolis.cz/301/program-hackerskeho-kongresu-paralelni-polis-2014/' target='_blank'>Program</a>",
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
                    "popupTitle": "Hackers Congress After Party",
                    "popupText": "Hala Jatka 78, Jate\u010Dn\u00ED ulice, Praha 7<br />Program: <a href='https://www.facebook.com/events/849991365032104/' target='_blank'>Pátek</a>, <a href='https://www.facebook.com/events/1541491262732580/' target='_blank'>Sobota</a>",
                    "icon": "jatkaDropIcon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [14.446482896599, 50.100153474297]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "popupTitle": "Hackers Congress Closing Party",
                    "popupText": "La Fabrika, Komunard\u016F 1001/30, 170 00 Praha 7<br />Program: <a href='https://www.facebook.com/events/700919323326002/' target='_blank'>Ned\u011Ble</a>",
                    "icon": "lafaDropIcon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [14.450136065266, 50.103835195263]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "popupTitle": "Zast\u00E1vka N\u00E1dra\u017E\u00ED Hole\u0161ovice",
                    "popupText": "Metro C<br />Tram 12, 17, 24, no\u010Dn\u00ED 53, 54<br />Bus 112, 156, 201",
                    "icon": "metroCDropIcon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [14.440828799986, 50.108301052644]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "popupTitle": "Zast\u00E1vka Palmovka",
                    "popupText": "Metro B<br />Tram 1, 14, 25<br />Bus 156, no\u010Dn\u00ED 505, 511",
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
                    "popupTitle": "Zast\u00E1vka Vltavsk\u00E1",
                    "popupText": "Metro C<br />Tram 1, 3, 8, 10, 12, 16, 25, no\u010Dn\u00ED: 52, 54, 55<br />Bus 109, no\u010Dn\u00ED 503, 513",
                    "icon": "metroCDropIcon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [14.43851137141, 50.100170679256]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "popupTitle": "Zast\u00E1vka D\u011Blnick\u00E1",
                    "popupText": "Tram 1, 12, 14, 25, no\u010Dn\u00ED 53, 54",
                    "icon": "tramSquareIcon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [14.449985861573, 50.102551786343]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "popupTitle": "Zast\u00E1vka Tusarova",
                    "popupText": "Tram 1, 14, 25",
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
                    "popupTitle": "Zast\u00E1vka Maniny",
                    "popupText": "Tram 1, 12, 14, 25, no\u010Dn\u00ED 53, 54",
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
                    "popupTitle": "Zast\u00E1vka Pra\u017Esk\u00E1 tr\u017Enice",
                    "popupText": "Tram 1, 14, 25",
                    "icon": "tramSquareIcon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [14.444216429974, 50.098297022633]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "popupTitle": "Zast\u00E1vka Maniny",
                    "popupText": "Bus 156",
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
                    "popupTitle": "Zast\u00E1vka Osadn\u00ED",
                    "popupText": "Bus 156",
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
                    "popupTitle": "Zast\u00E1vka Argentinsk\u00E1",
                    "popupText": "Bus 156, no\u010Dn\u00ED 505, 511",
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
                    "popupTitle": "Zast\u00E1vka Argentinsk\u00E1",
                    "popupText": "Bus no\u010Dn\u00ED 505, 511",
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
    },
    markerDataEN = {
        "features": [
            {
                "properties": {
                    "popupText": "Institute, HUB, Café<br />D\u011Blnick\u00E1 43, Praha 7<br /><a href='http://www.paralelnipolis.cz/308/hackers-congress-paralelni-polis-2014-schedule/' target='_blank'>Programme</a>"
                }
            },
            {
                "properties": {
                    "popupText": "Jatka 78 Hall, Jate\u010Dn\u00ED ulice, Praha 7<br />Programme: <a href='https://www.facebook.com/events/849991365032104/' target='_blank'>Friday</a>, <a href='https://www.facebook.com/events/1541491262732580/' target='_blank'>Saturday</a>"
                }
            },
            {
                "properties": {
                    "popupText": "La Fabrika, Komunard\u016F 1001/30, 170 00 Praha 7<br />Programme: <a href='https://www.facebook.com/events/700919323326002/' target='_blank'>Sunday</a>"
                }
            },
            {
                "properties": {
                    "popupTitle": "N\u00E1dra\u017E\u00ED Hole\u0161ovice Stop",
                    "popupText": "Subway Line  C<br />Tram 12, 17, 24, Night tram 53, 54<br />Bus 112, 156, 201"
                }
            },
            {
                "properties": {
                    "popupTitle": "Palmovka Stop",
                    "popupText": "Subway Line B<br />Tram 1, 14, 25<br />Bus 156, Night Bus 505, 511"
                }
            },
            {
                "properties": {
                    "popupTitle": "Vltavsk\u00E1 Stop",
                    "popupText": "Subway Line C<br />Tram 1, 3, 8, 10, 12, 16, 25, Night tram 52, 54, 55<br />Bus 109, Night Bus 503, 513"
                }
            },
            {
                "properties": {
                    "popupTitle": "D\u011Blnick\u00E1 Stop",
                    "popupText": "Tram 1, 12, 14, 25, Night Tram 53, 54"
                }
            },
            {
                "properties": {
                    "popupTitle": "Tusarova Stop",
                    "popupText": "Tram 1, 14, 25"
                }
            },
            {
                "properties": {
                    "popupTitle": "Maniny Stop",
                    "popupText": "Tram 1, 12, 14, 25, Night Tram 53, 54"
                }
            },
            {
                "properties": {
                    "popupTitle": "Pra\u017Esk\u00E1 Tr\u017Enice Stop"
                }
            },
            {
                "properties": {
                    "popupTitle": "Maniny Stop",
                    "popupText": "Bus 156"
                }
            },
            {
                "properties": {
                    "popupTitle": "Osadn\u00ED Stop",
                    "popupText": "Bus 156"
                }
            },
            {
                "properties": {
                    "popupTitle": "Argentinsk\u00E1 Stop",
                    "popupText": "Bus 156, Night Bus 505, 511"
                }
            },
            {
                "properties": {
                    "popupTitle": "Argentinsk\u00E1 Stop",
                    "popupText": "Night Bus 505, 511"
                }
            }
        ]
    };


jQuery(function () {
    "use strict";

    jQuery('#infomap').height(649);

    //l10n ;)
    if (jQuery('html').attr('lang') === 'en-US') {
        jQuery.each(markerData.features, function (i, v) {
            jQuery.extend(markerData.features[i].properties, markerDataEN.features[i].properties);
        });
    }

    var map = L.map('infomap').setView([50.105, 14.448], 15),
        DropIcon = L.Icon.extend({
            options: {
                shadowUrl: '/infomap/img/markerShadow.png',
                iconSize:     [25, 41],
                shadowSize:   [41, 41],
                iconAnchor:   [14, 40],
                shadowAnchor: [4, 62],
                popupAnchor:  [0, -45]
            }
        }),
        SquareIcon = L.Icon.extend({
            options: {
                shadowUrl: '/infomap/img/markerShadow.png',
                iconSize:     [25, 25],
                shadowSize:   [41, 41],
                iconAnchor:   [14, 15],
                shadowAnchor: [10, 40],
                popupAnchor:  [0, -25]
            }
        });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.geoJson(markerData, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng);
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<h3>' + feature.properties.popupTitle + '</h3>' + feature.properties.popupText);
            if (feature.properties.icon.indexOf("Square") > -1) {
                layer.setIcon(new SquareIcon({iconUrl: '/infomap/img/' + feature.properties.icon + '.png'}));
            } else {
                layer.setIcon(new DropIcon({iconUrl: '/infomap/img/' + feature.properties.icon + '.png'}));
            }
        }
    }).addTo(map);

    L.geoJson(polyData, {
        style: { color: "#12ff00", weight: 8}
    }).addTo(map);

});