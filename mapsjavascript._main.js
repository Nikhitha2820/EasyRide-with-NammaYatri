// Creating a map object
var mymap = L.map("mapid").setView([12.9716, 77.5946], 13);

// Adding a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(mymap);

// Creating an auto icon
var autoIcon = L.icon({
  iconUrl: "Img/auto-icon.jpeg",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

// Array of available autos with their coordinates and details
var availableAutos = [
  {
    coordinates: [12.970496, 77.601978],
    details: {
      autoNumber: "KA01AB1234",
      driverName: "John Doe",
      phone: "9876543210",
    },
  },
  {
    coordinates: [12.977609, 77.591538],
    details: {
      autoNumber: "KA01CD5678",
      driverName: "Jane Doe",
      phone: "9876543210",
    },
  },
  {
    coordinates: [12.9647, 77.5975],
    details: {
      autoNumber: "KA01EF9012",
      driverName: "Bob Smith",
      phone: "9876543210",
    },
  },
];

// Adding auto markers to the map
for (var i = 0; i < availableAutos.length; i++) {
  var autoMarker = L.marker(availableAutos[i].coordinates, {
    icon: autoIcon,
  }).addTo(mymap);

  // Binding a popup to the auto marker with auto details
  autoMarker.bindPopup(
    "<h3>Auto Details</h3><p>Auto Number: " +
      availableAutos[i].details.autoNumber +
      "</p><p>Driver Name: " +
      availableAutos[i].details.driverName +
      "</p><p>Phone: " +
      availableAutos[i].details.phone +
      "</p><a href='#' onclick=\"window.location.href='price.html';\">Contact Driver</a>" +
      "</p>"
  );
}
