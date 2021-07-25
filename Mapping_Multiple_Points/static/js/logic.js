// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//L.map = variable name
//mapid = id tag in the <div> element
//setView() = identifies the center of the map with a zoom level of "4"
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Alternative to setView--use this if using multiple tile layers or background images
//Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// Get data from cities.js
let cityData = cities;

// An array containing each city's location, state, and population.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    color:'#E7940C',
    fillColor:'#EFAB2E',
    fillOpacity: 0.5,
    radius:city.population/100000})
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// L.circleMarker([34.0522, -118.2437], {
//     color:'#0B0B0B',
//     fillColor:'#F6FF33',
//     fillOpacity: 0.5,
//     radius: 300 //measured in meters   
//  }).addTo(map);


// We create the tile layer that will be the background of our map.
//tileLayer = API URL with reference to the API Key file
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);