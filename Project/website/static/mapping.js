let  infoWindow,map;
let lang,long;
 
function find(){
  document.getElementById("name").innerHTML="Your Location"

    let map=new Map()
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.049999, lng: 	-114.066666 },
        zoom: 15,
      });
      infoWindow = new google.maps.InfoWindow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const marker = new google.maps.Marker({
            position: pos,
            map,
            draggable: true,
            animation: google.maps.Animation.DROP,
          });
          console.log(long)
          console.log(lang)

          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      
      );

    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function traffic() {
  document.getElementById("name").innerHTML="Real Time Traffic"
    let map=new Map()
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.049999, lng: 	-114.066666 },
        zoom: 6,
      });
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              lang=position.coords.latitude;
              long=position.coords.longitude
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter());
            }
          
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
     map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: lang, lng: long },
    });
    const trafficLayer = new google.maps.TrafficLayer();
  
    trafficLayer.setMap(map);
  }

function toggle(){
  traffic()
  document.getElementById("name").innerHTML="Calgary Traffic Data"
    var container = L.DomUtil.get('map');
      if(container != null){
        container._leaflet_id = null;
      }
    map = L.map('map').setView([51.0447, -114.0719], 13);
      accessToken = 'pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig';
      var on=L.tileLayer('https://api.mapbox.com/styles/v1/k4ukichu/cl0bjqsi500fh15oip5nuz30n/tiles/{z}/{x}/{y}?access_token='+accessToken, {
          attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
          tileSize: 512,
          zoomOffset: -1,
      });
      

var mapbox=L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);;


L.control.layers({
    "Off":mapbox,
    "On":on,
}, null, {
    collapsed: false
}).addTo(map);

}
function route(){
  traffic()
  mapboxgl.accessToken ='pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig';
  var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/basic-v9",
  center: [-114.06, 51.05],
  zoom: 12
  });
  
  map.on('load', function() {
    map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://k4ukichu/cl1ttx13u000n14o6jt400pr4'
    });
      
      map.addLayer({
          'id': 'contours',
          "type": "line",
          "source": "contours",
          'paint': {
              'line-color': {
                  property: 'volume',
                  stops: [
                      [1000, '#69cbf5'],
                      [48250, '#5E9FC7'],
                      [95500, '#9AD17B'],
                      [142750, '#EF6769'],
                      [190000, '#FCBA70']
                  ]
              },
              'line-width': 2,
              'line-opacity': 1,
          },
          "source-layer": "1-5pi9vx"
      });
  });
   
  var nav = new mapboxgl.NavigationControl();
   
  var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: 'metric',
  profile: 'mapbox/driving',
  alternatives: 'false',
  geometries: 'geojson'
  });
   
  map.scrollZoom.enable();
  map.addControl(directions, 'top-right');
  
  var incidents = {
  type: 'FeatureCollection',
  features: [
  
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.075,51.041]
      },
      'properties': { 
          'risk':"Risk Level:  High",
          'incidents': "Number of incidents: 817"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.063,51.046]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 747"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.09,51.02]
      },
      'properties': { 
          'risk':"Risk Level: Relatively low",
          'incidents': "Number of incidents: 35"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.12,51.104]
      },
      'properties': { 
          'risk':"Risk Level: Relatively high",
          'incidents': "Number of incidents: 117"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.013,51.124]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 200"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.10,50.96]
      },
      'properties': { 
          'risk':"Risk Level: Relatively low",
          'incidents': "Number of incidents: 15"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.057,51.013]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 445"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.04,50.886]
      },
      'properties': { 
          'risk':"Risk Level: Relatively high",
          'incidents': "Number of incidents: 123"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.065,50.903]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 205"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.056,50.957]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 570"
      }
  },
  {
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.14,50.917]
    },
    'properties': { 
        'risk':"Risk Level: Relatively low",
        'incidents': "Number of incidents: 39"
    }
},
{
  'type': 'Feature',
  'geometry': {
      'type': 'Point',
      'coordinates': [-114.15,51.016]
  },
  'properties': { 
      'risk':"Risk Level: Relatively low",
      'incidents': "Number of incidents: 129"
  }
},
{
  'type': 'Feature',
  'geometry': {
      'type': 'Point',
      'coordinates': [-114.134,51.008]
  },
  'properties': { 
      'risk':"Risk Level: Relatively high",
      'incidents': "Number of incidents: 122"
  }
},
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.04,50.886]
      },
      'properties': { 
          'risk':"Risk Level: Relatively high",
          'incidents': "Number of incidents: 123"
      }
  },
  {
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.585,50.789]
    },
    'properties': { 
        'risk':"Risk Level:  relatively low",
        'incidents': "Number of incidents: 120"
    }
},
{
  'type': 'Feature',
  'geometry': {
      'type': 'Point',
      'coordinates': [-114.042,50.999]
  },
  'properties': { 
      'risk':"Risk Level:  high",
      'incidents': "Number of incidents: 631"
  }
},
{
  'type': 'Feature',
  'geometry': {
      'type': 'Point',
      'coordinates': [-113.96,50.908]
  },
  'properties': { 
      'risk':"Risk Level: Relatively high",
      'incidents': "Number of incidents: 281"
  }
},
{
  'type': 'Feature',
  'geometry': {
      'type': 'Point',
      'coordinates': [-114.027,51.081]
  },
  'properties': { 
      'risk':"Risk Level: Relatively high",
      'incidents': "Number of incidents: 374"
  }
},
  ]
  };
   
  var obstacle = turf.buffer(incidents, 0.25, { units: 'kilometers' });
   
  map.on('load', function (e) {
      map.addLayer({
          id: 'incidents',
          type: 'fill',
          source: {
              type: 'geojson',
              data: obstacle
      },
      layout: {},
      paint: {
          'fill-color': '#f03b20',
          'fill-opacity': 0.5,
          'fill-outline-color': '#f03b20'
      }
  });
   
  //Create sources and layers for the returned routes.
  //There will be a maximum of 3 results from the Directions API.
  //We use a loop to create the sources and layers.
  for (i = 0; i <= 2; i++) {
  map.addSource('route' + i, {
  type: 'geojson',
  data: {
  type: 'Feature'
  }
  });
   
  map.addLayer({
  id: 'route' + i,
  type: 'line',
  source: 'route' + i,
  layout: {
  'line-join': 'round',
  'line-cap': 'round'
  },
  paint: {
  'line-color': '#cccccc',
  'line-opacity': 0.5,
  'line-width': 13,
  'line-blur': 0.5
  }
  });
  }
  });
  
  map.on('load', function() {
      map.addLayer({
        id: 'incident',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: incidents
        },
        layout: {
          'icon-image': 'car-11',
          'icon-allow-overlap': true
        },
        paint: { }
      });
    });
  
  var popup = new mapboxgl.Popup();
  
  map.on('mousemove', function(e) {
    
  var features = map.queryRenderedFeatures(e.point, { layers: ['incident'] });
  if (!features.length) {
      popup.remove();
      return;
  }
    
  var feature = features[0];
    
  popup.setLngLat(feature.geometry.coordinates)
  .setHTML('<h6>' + feature.properties.risk + '</h6><h6>' + feature.properties.incidents + '</h6>')
  .addTo(map);
    
  map.getCanvas().style.cursor = features.length ? 'pointer' : '';
    
  });
   
  directions.on('route', (e) => {
  var reports = document.getElementById('reports');
  reports.innerHTML = '';
  var report = reports.appendChild(document.createElement('div'));
  let routes = e.route;
   
  //Hide all routes by setting the opacity to zero.
  for (i = 0; i < 3; i++) {
  map.setLayoutProperty('route' + i, 'visibility', 'none');
  }
   
  routes.forEach(function (route, i) {
  route.id = i;
  });
   
  routes.forEach((e) => {
  //Make each route visible, by setting the opacity to 50%.
  map.setLayoutProperty('route' + e.id, 'visibility', 'visible');
   
  //Get GeoJson LineString feature of route
  var routeLine = polyline.toGeoJSON(e.geometry);
   
  //Update the data for the route, updating the visual.
  map.getSource('route' + e.id).setData(routeLine);
   
  var collision = '';
  var emoji = '';
  var clear = turf.booleanDisjoint(obstacle, routeLine);
   
  if (clear == true) {
  collision = 'is good!';
  detail = 'does not go';
  emoji = '✔️';
  report.className = 'item';
  map.setPaintProperty('route' + e.id, 'line-color', '#74c476');
  } else {
  collision = 'is bad.';
  detail = 'goes';
  emoji = '⚠️';
  report.className = 'item warning';
  map.setPaintProperty('route' + e.id, 'line-color', '#de2d26');
  }
   
  //Add a new report section to the sidebar.
  // Assign a unique `id` to the report.
  report.id = 'report-' + e.id;
   
  // Add the response to the individual report created above.
  var heading = report.appendChild(document.createElement('h3'));
   
  // Set the class type based on clear value.
  if (clear == true) {
  heading.className = 'title';
  } else {
  heading.className = 'warning';
  }
   
  heading.innerHTML = emoji + ' Route ' + (e.id + 1) + ' ' + collision;
   
  // Add details to the individual report.
  var details = report.appendChild(document.createElement('div'));
  details.innerHTML =
  'This route ' + detail + ' through an area with high traffic incidents rate.';
  report.appendChild(document.createElement('hr'));
  });
  });
}

function edit(){
  traffic()
  document.getElementById("name").innerHTML="Edit"
    
    map = L.map('map').setView([51.03, -114.04], 12);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'setir/ckzxpqvxp002714pf1mndpxad',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2V0aXIiLCJhIjoiY2t6eGF6cTBzMDh5YjJucDlxdDM0enE5cCJ9.3_P-KSMqZXf08z9rHzweWw'
    }).addTo(map);

    var geojsonFeature = {
        "type": "Feature",
        "properties": {
            "name": "polyline"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": []
        }
    };

    var polylineStyle = {
        "color": "#dd98f5",
    };

    var polyline = L.geoJSON(geojsonFeature, {style: polylineStyle}).addTo(map);

    var geojsonFeature_simplify = {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": []
        }
    };

    var polylineStyle_simplify = {
        "color": "#05ab05",
    };

    var polyline_simplify = L.geoJSON(geojsonFeature_simplify, {style: polylineStyle_simplify}).addTo(map);

    

    function onMapClick(e) {
        geojsonFeature["geometry"]["coordinates"].push([e.latlng['lng'], e.latlng['lat']]);
        console.log(e);
        console.log(geojsonFeature);
        polyline.remove();
        polyline = L.geoJSON(geojsonFeature, {style: polylineStyle}).addTo(map);
    }

    map.on('click', onMapClick);

    slider = L.control.slider(function(value) {
            console.log(value);
            return toleranceV = value;}, 
        {
        max: 0.1,
        value: 0.1,
        step:0.0005,
        size: '250px',
        orientation:'vertical',
        id: 'slider',
        }).addTo(map);

    L.easyButton( '<span class="line">&#47;</span>', function(){
        var options = {tolerance: toleranceV, highQuality: false};
        var simplified = turf.simplify(geojsonFeature, options);
        polyline_simplify = L.geoJSON(simplified).addTo(map);
    }).addTo(map);


    L.easyButton( '<i class="fa fa-trash" aria-hidden="true"></i>', function(){
        geojsonFeature["geometry"]["coordinates"] = [];
        polyline.remove();
        polyline_simplify.remove();
    }).addTo(map);
}

