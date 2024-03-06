function displayTemperature(response) {
  let currentTemperatureElement = document.querySelector("#current-temp-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  currentTemperatureElement.innerHTML = temperature;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;

  let apiKey = "aab3d3obc0205ebt561454f09dff85ec";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

let weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", searchCity);

let currentDateSpan = document.querySelector("#current-date");
let currentDate = new Date();
currentDateSpan.innerHTML = formatDate(currentDate);
