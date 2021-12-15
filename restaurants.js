const url = "https://oliviayen.com/wordpress_test/wp-json/wp/v2/restaurants?_embed";

initMap();

fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach(showRestaurant));

function showRestaurant(restaurant) {
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
}

function initMap() {
  const uluru = { lat: -25.344, lng: 131.036 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
