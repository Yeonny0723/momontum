const weatherSpan = document.getElementById("weather-container");

const COORDS = "Coords data";
const API_key = "3b59520a8d3addc8a631831611abdd6c";

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const temperature = `${json.main.temp}`;
      const place = json.name;
      weatherSpan.innerText = `${temperature}°C @ ${place}`;
    });
};

const getCoordsLS = () => {
  const coordsLS = JSON.parse(localStorage.getItem(COORDS));
  if (coordsLS == undefined) {
    askForCoords();
  } else {
    const lat = coordsLS.latitude;
    const lon = coordsLS.longitude;
    getWeather(lat, lon);
  }
};

const saveCoordsLS = (crdObj) => {
  localStorage.setItem(COORDS, JSON.stringify(crdObj));
};

function success(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const crdsObj = {
    latitude: lat,
    longitude: lon,
  };
  saveCoordsLS(crdsObj);
  getWeather(lat, lon);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(success, error);
};

function init() {
  getCoordsLS();
}
init();
