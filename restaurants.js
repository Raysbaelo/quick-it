const url = "https://oliviayen.com/wordpress_test/wp-json/wp/v2/restaurants?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach(showRestaurant));

const center = { lat: 55.677702456377986, lng: 12.582283467458355 };
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 12,
  center: center,
});

const customMarker = {
  path: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
  fillColor: "#006462",
  fillOpacity: 1,
  strokeWeight: 0.5,
  strokeColor: "white",
  rotation: 0,
  scale: 2,
  anchor: new google.maps.Point(15, 30),
};

function showRestaurant(restaurant) {
  addToMap();
  console.log(restaurant.id);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("a").href = restaurant.website;
  clone.querySelector(".restaurantBackground").src =
    restaurant._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  clone.querySelector(".restaurantLogo").src = `http://agata.dk/qui/${restaurant.id}.png`;
  console.log(`http://agata.dk/qui/${restaurant.id}.png`);
  clone.querySelector(".restaurantName").textContent = restaurant.title.rendered;

  const parent = document.querySelector(".restaurantGrid");
  parent.appendChild(clone);

  function addToMap() {
    var pos = { lat: Number(restaurant.latitude), lng: Number(restaurant.longitude) };
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: customMarker,
    });
    (function (marker) {
      // add click event
      google.maps.event.addListener(marker, "click", function () {
        infowindow = new google.maps.InfoWindow({
          content: restaurant.title.rendered,
        });
        infowindow.open(map, marker);
      });
    })(marker);
  }
}
