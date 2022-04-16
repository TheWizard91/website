function initMap() {
    // The location of my house
    var home = {lat: 40.888149, lng: -73.859930};
    // The map centered at my home
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 13, center: home});
    // The marker, positioned at my home
    var marker = new google.maps.Marker({position: home, map: map,
        icon: "/home/emmanuel/Desktop/my_portfolio/frontend/src/images/findMeLogoExstracted.png"});
}
import "./style.css";

// Initialize and add the map
// function initMap(): void {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 4,
//       center: uluru,
//     }
//   );

//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }
// export { initMap };
