var map;
var infowindow;
var service;
var type_poi;
var lat = 47.523655;
var lng = 1.33654;


var regex = /[?&]([^=#]+)=([^&#]*)/g,
    url = window.location.href,
    params = {},
    match;
while(match = regex.exec(url)) {
    params[match[1]] = match[2];
}

var parametre = JSON.stringify(params);

var parsing = JSON.parse(parametre);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
}


function mapParam() {

    getLocation();

    var messiah = {
        lat: lat,
        lng: lng
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: messiah,
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: messiah,
        map: map,
        title: 'center_search'
    });

    if (parsing.param == 'undefined') {
        type_poi = 'places';
    }
    else
        type_poi = parsing.param;

    var request = {
        location: messiah,
        radius: 10000,
        type: [type_poi]
    }
    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(createMarker);
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        icon: {
            url: 'http://maps.gstatic.com/mapfiles/circle.png',
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(15, 25)
        },
        position: place.geometry.location
    });
    marker.addListener('click', function () {

        var request = {
            reference: place.reference
        };
        service.getDetails(request, function (details, status) {

            infowindow.setContent([
                details.name,
                details.formatted_address,
                ("<a href='")+details.website+("'>") + details.website+("</a>"),
                details.rating,
                details.formatted_phone_number].join("<br />"));
            infowindow.open(map, marker);
        });

    })
}
window.onload = mapParam;