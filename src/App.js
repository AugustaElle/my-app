import React, { useState } from "react";
import axios from 'axios';

export default function App() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);


  function showTemp(response) {
    setTemperature(
      <ul>
        <li>Temp: {Math.round(response.data.main.temp)}°C</li>
        <li>Humidity: {Math.round(response.data.main.humidity)}%</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          />
        </li>
      </ul>
    );
  }

  function displayCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9bcab27e2586a82d6ff0a45c0b3f6c89&units=metric`;
    axios.get(url).then(showTemp);
  }

  function inputCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1> Weather App </h1>
      <form onSubmit={displayCity}>
        <input type="text" placeholder="Enter a city" onChange={inputCity} />
        <input type="submit" value="Search" />
      </form>
      <h1>{temperature}</h1>
      <footer>Coded by Leah L.  See my Source code on <a href="https://github.com/AugustaElle/my-app" rel="noopener noreferrer">Github</a> </footer>
    </div>
  );
}

