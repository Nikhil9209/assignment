document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "7abb55e70ec7e6fbd4ab4f09a036a46e"; // Replace this with your actual OpenWeatherMap API key

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log("API URL:", url); // helpful to debug

  if (city === "") {
    document.getElementById("errorMsg").textContent = "Please enter a city name.";
    document.getElementById("weatherInfo").classList.add("hidden");
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      // Clear error and show weather box
      document.getElementById("errorMsg").textContent = "";
      document.getElementById("weatherInfo").classList.remove("hidden");

      // Fill in weather data
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = "Temperature: " + data.main.temp + "°C";
      document.getElementById("condition").textContent = "Condition: " + data.weather[0].main;
      document.getElementById("humidity").textContent = "Humidity: " + data.main.humidity + "%";
      document.getElementById("wind").textContent = "Wind Speed: " + data.wind.speed + " m/s";

      // Set weather icon
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById("weatherIcon").src = iconUrl;
      document.getElementById("weatherIcon").alt = data.weather[0].description;
    })
    .catch(error => {
      console.log("Error:", error);
      document.getElementById("weatherInfo").classList.add("hidden");
      document.getElementById("errorMsg").textContent = "City not found. Please try again.";
    });
});
