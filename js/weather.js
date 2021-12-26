const API_KEY = "7a6b2c6fd548fcdab1cc79281921ba2b";

function onGeoOk(postion) {
  const lat = postion.coords.latitude;
  const lng = postion.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      let temp = data.main.temp - 273.15;
      temp = temp.toFixed(1);

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${temp}℃`;
    });
}

function onGeoError() {
  alert("Can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
