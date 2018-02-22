var arkMapOverlay;

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: {
      lat: -4.5,
      lng: 4.5
    },
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    styles: [
      {
        featureType: "all",
        stylers: [
          {
            color: "#000000"
          }
        ]
      }
    ]
  });

  var imageBounds = {
    north: 0.26,
    south: -10.25,
    east: 10.23,
    west: -0.27
  };

  arkMapOverlay = new google.maps.GroundOverlay(
    "https://mle-ii/UKArServer/images/Ragnarok_Ocean_Topographic_Map.jpg",
    imageBounds
  );
  arkMapOverlay.setMap(map);
/*
  var uluru = { lat: -4.64, lng: 3.11 };
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: "Open Argentavis/Griffin trap at 46.4,31.1"
  });

  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });

  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Open Argentavis/Griffin trap, easy,safe</h1>' +
    '<div id="bodyContent">' +
    '<p>Made by McScruff<br>Hi all,<br><br>I have just built my trap and anyone can use it, its ideal for low level players too as its in a safe location.<br><br>For best use, make sure the generator is on and the gates are open, go to the cave entrance and spyglass which dino you want. Use ptera to agro it and let it follow you into the trap, ptera will fit out through the gaps.<br><br>Stop at the keypad and close the doors.<br><br>Can be found at 46.4,31.1 its in the cave next to my base<br><br><a href="http://www.ukarkserver.com/viewtopic.php?f=9&t=57">Forum Thread</a> </p>' +
    "</div>" +
    "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
*/
  var coordsDiv = document.getElementById("coords");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(coordsDiv);

  arkMapOverlay.addListener("mousemove", function(event) {
    coordsDiv.textContent =
      "lat: " +
      Math.round(-event.latLng.lat() * 100) / 10 +
      ", lng: " +
      Math.round(event.latLng.lng() * 100) / 10;
  });
  
  arkMapOverlay.addListener("click", function(event) {
    coordsDiv.textContent =
      "lat: " +
      Math.round(-event.latLng.lat() * 100) / 10 +
      ", lng: " +
      Math.round(event.latLng.lng() * 100) / 10;
  });

  var bases = [
    { lat: 20, lng: 24, name: "Penguins Cove - Relentless555" },
    { lat: 31.8, lng: 24.5, name: "McNae's Keep - LeonArko" },
    { lat: 84.9, lng: 56.3, name: "McNae's Dock - LeonArko" },
    { lat: 55, lng: 28, name: "House Martell - Oberyn" },
    { lat: 19, lng: 79, name: "Jolly Ranch - Problem Burger -" },
    { lat: 29.6, lng: 24.9, name: "The Council Grounds - F145h" },
    { lat: 50, lng: 60, name: "The Tree Of Horizon - AndromadaX" },
    { lat: 28, lng: 48, name: "Dauntless - SlingingTakumi" },
    { lat: 81.8, lng: 47.2, name: "Draculis Domina - Pandy" },
    { lat:83, lng:39, name:"Kangaroo HQ - dawsy08" },
    { lat:61, lng:18, name:"Trading Post & Community taming pen - AliveFoxyLady" },
    { lat:75.2, lng:66.4, name:"Buddha (King of the desert) - BondeGavel" },
    { lat:41, lng:38, name:"Pastafarians - irishevilmonkey" },
    { lat:64.5, lng:15.3, name:"Drunkard's Rest - Mike_NCvox" },
    { lat:32, lng:42, name:"KSR Knight" },
    { lat:71.6, lng:69.1, name:"Keegan & Lauren"},
    { lat: 41, lng: 15, name: "Pirate Isle - MR HellHound UK" },
    {lat:67.6, lng: 61.4, name: "McScruff"},
    { lat: 24.3, lng: 41.2, name: "Infinite Maze" },
    { lat: 15, lng: 39, name: "Fishing Event" },
    { lat: 21, lng: 40, name: "Castle used for events" }
  ];
  bases.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-feature.lat / 10, feature.lng / 10),
      title: feature.name + " " + feature.lat + ", " + feature.lng,
      map: map,
      icon: feature.icon
    });
    //if (feature.data !== 'foo') {
    marker.addListener("click", function() {
      var infowindow2 = new google.maps.InfoWindow({
        content: marker.title
      });
      infowindow2.open(map, marker);
    });
    //}
  });
}