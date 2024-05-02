//40.37649405880282, 18.1473278

function initMap() {
    var position = {lat: "40.37649405880282", lng: "18.1473278"}; // Sostituisci con le coordinate della posizione desiderata
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Imposta il livello di zoom
        center: position // Imposta il centro della mappa
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'Hello World!' // Titolo del marker
    });
}