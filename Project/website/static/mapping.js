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
  zoom: 11
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
          'coordinates': [-113.958331,50.9504395]
      },
      'properties': { 
          'CAMERA30':"cAMERA URL: http://trafficcam.calgary.ca/loc29.jpg)",
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.17,51.09]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 353"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.16,51.05]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 513"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.10,51.15]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 336"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.11,51.07]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 928"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.10,51.00]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 1228"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.10,50.96]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 361"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.08,51.05]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 2346"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.07,50.91]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 556"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.04,51.14]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 530"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.05,51.10]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 1223"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.01,51.05]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 2021"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.05,50.99]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 1757"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.04,50.95]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 1024"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.99,51.08]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 857"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.99,51.01]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 742"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.97,50.95]
      },
      'properties': { 
          'risk':"Risk Level: High",
          'incidents': "Number of incidents: 496"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.95,51.11]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 759"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.94,51.06]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 650"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.94,51.03]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 384"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.16,51.16]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 293"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.01,51.17]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 151"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.02,50.88]
      },
      'properties': { 
          'risk':"Risk Level: Relatively High",
          'incidents': "Number of incidents: 256"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.97,51.15]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 290"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.96,50.89]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 274"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.95,50.97]
      },
      'properties': { 
          'risk':"Risk Level: High Relatively Low",
          'incidents': "Number of incidents: 238"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.21,51.15]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 167"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.18,51.02]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 229"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.24,51.13]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 85"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.24,51.09]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 114"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.08,51.17]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 89"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.92,51.15]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 81"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.93,50.94]
      },
      'properties': { 
          'risk':"Risk Level: Relatively Low",
          'incidents': "Number of incidents: 86"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.12,50.90]
      },
      'properties': { 
          'risk':"Risk Level: Low",
          'incidents': "Number of incidents: 48"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-114.04,50.86]
      },
      'properties': { 
          'risk':"Risk Level: Low",
          'incidents': "Number of incidents: 11"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.965,50.875]
      },
      'properties': { 
          'risk':"Risk Level: Low",
          'incidents': "Number of incidents: 60"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.906,50.906]
      },
      'properties': { 
          'risk':"Risk Level: Low",
          'incidents': "Number of incidents: 32"
      }
  },
  {
      'type': 'Feature',
      'geometry': {
          'type': 'Point',
          'coordinates': [-113.89,51.04]
      },
      'properties': { 
          'risk':"Risk Level: Low",
          'incidents': "Number of incidents: 23"
      }
  }
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

