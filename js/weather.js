const API_KEY = "dab7849b425d6d36b244eff2d9dae48f";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&nuit=metric`;
  console.log(url);
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = data.weather[0].main;
    })
  );
}

function onGeoError() {
  console.log("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
