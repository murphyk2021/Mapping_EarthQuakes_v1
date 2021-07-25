// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//L.map = variable name
//mapid = id tag in the <div> element
//setView() = identifies the center of the map with a zoom level of "5"
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6428],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  dashArray: '10,10',
  opacity: 0.5
}).addTo(map);

// let cityData = cities;


  // Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         color: 'orange',
//         fillColor: '##EA7F0D ',
//         weight: 4,
//         fillOpacity: 0.5,
//         radius:city.population/200000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });




//  Add a marker to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '##EA7F0D ',
//     fillOpacity: 0.5,
//     radius: 300
//  }).addTo(map);

// Alternative to setView--use this if using multiple tile layers or background images
//Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });



// We create the tile layer that will be the background of our map.
//tileLayer = API URL with reference to the API Key file
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);