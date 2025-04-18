async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = '5bd3bd6ac01156554d9657ec8e979d3a'; // Replace with OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;
  } else {
    document.getElementById("weatherResult").innerText = "City not found.";
  }
}
