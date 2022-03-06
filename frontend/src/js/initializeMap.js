var directionsDisplay,
          directionsService,
          map;

      function initialize() {
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();
        var chicago = new google.maps.LatLng(41.850033, -87.6500523);
        var mapOptions = { zoom:7, mapTypeId: google.maps.MapTypeId.ROADMAP, center: chicago }
        map = new google.maps.Map(document.getElementById("root"), mapOptions);
        directionsDisplay.setMap(map);
      }