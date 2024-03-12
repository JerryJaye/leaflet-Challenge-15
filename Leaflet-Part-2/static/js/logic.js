// Leaflet Challenge Part 1
// Create our initial map object
// Set the longitude, latitute and starting zoom level. I set the view to Denpasar, Bali, Indonesia
let myMap = L.map("map").setView([-8.6500,115,21667], 3);

//add the tile layer as out base map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// I reviewed the USGS site and and selected what I wanted to display. 
//I choose the dataset for all week, the past 7 days.
const url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Access the data using d3.json.
d3.json(url).then(function(data) {
// Confirm that the requested data is delivered. See object in console.  
  console.log(data);

// create earthquakes as a layer group 
  let earthquakes = L.layerGroup();

// Identify and process each feature to be visualised, including lat, long, depth, magitiude
  data.features.forEach(function(feature) {
      let coordinates = feature.geometry.coordinates;
      let lat = coordinates[1];
      let lng = coordinates[0];
      let depth = coordinates[2];

      let magnitude = feature.properties.mag;
// Create circle makers. The size of the marker dependent on magnitude of earthquake
// Colour of marker dependent on depth of earthquake.
      
let marker = L.circleMarker([lat, lng], {
          radius: magnitude * 3,
          color: '#000',
          weight: 1,
          fillColor: getColor(depth),
          fillOpacity: 0.7
      });
// bind information to each marker identifying the quakes location, magnitude and depth.
      marker.bindPopup(`<b>Location:</b> ${feature.properties.place}<br>
          <b>Magnitude:</b> ${magnitude}<br>
          <b>Depth:</b> ${depth} km`);

      marker.addTo(earthquakes);
  });

  earthquakes.addTo(myMap);

  function getColor(d) {
      return d > 90 ? '#581845' :
             d > 70 ? '#900C3F' :
             d > 50 ? '#C70039' :
             d > 30 ? '#FF5733' :
             d > 10 ? '#FFC300' :
             d > -10 ? '#DAF7A6' :
          '#1A9850';
  }

  let legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {
    let div = L.DomUtil.create('div', 'info legend'),
        depths_intervals = [-10, 10, 30, 50, 70, 90],
        labels = [];
  
    // Ensure each legend color box has a defined size
    for (let i = 0; i < depths_intervals.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getColor(depths_intervals[i] + 1) + '; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> ' +
          depths_intervals[i] + (depths_intervals[i + 1] ? '&ndash;' + depths_intervals[i + 1] + ' km<br>' : '+ km') + '<br>';
    }
  
    return div;
  };

  legend.addTo(myMap);
});

var tectonicPlatesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"; // Replace with the path to your GeoJSON file
fetch(tectonicPlatesUrl)
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: "red",
                    weight: 2,
                    opacity: .5
                };
            }
        }).addTo(myMap);
    });