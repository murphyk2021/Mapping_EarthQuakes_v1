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

// We create the tile layer that will be the background of our map.
//tileLayer = API URL with reference to the API Key file
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);