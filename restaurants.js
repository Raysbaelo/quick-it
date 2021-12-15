const url = "https://oliviayen.com/wordpress_test/wp-json/wp/v2/restaurants?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach(showRestaurant));

const center = { lat: 55.677702456377986, lng: 12.582283467458355 };
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 12,
  center: center,
});

function showRestaurant(restaurant) {
  addToMap();
  console.log(restaurant.id);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("a").href = "agata.dk";
  clone.querySelector(".restaurantBackground").src =
    restaurant._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  clone.querySelector(".restaurantLogo").src = `http://agata.dk/qui/${restaurant.id}.png`;
  console.log(`http://agata.dk/qui/${restaurant.id}.png`);
  clone.querySelector("h3").textContent = restaurant.title.rendered;

  const parent = document.querySelector(".restaurantGrid");
  parent.appendChild(clone);

  function addToMap() {
    var pos = { lat: Number(restaurant.latitude), lng: Number(restaurant.longitude) };
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
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
