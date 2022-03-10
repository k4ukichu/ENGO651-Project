var map = L.map('map').setView([51.0447, -114.0719], 12);
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