const apiKey = '249aacbf8a1cbc99472c4715ad8ca256'; // Your actual API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

// Elements to display weather data
const cityName = document.getElementById('cityName');
const currentTemp = document.getElementById('currentTemp');
const weatherCondition = document.getElementById('weatherCondition');
const weatherIcon = document.getElementById('weatherIcon');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const tempToggle = document.getElementById('tempToggle'); // Get the checkbox

let currentTemperatureInCelsius = null;
let currentTemperatureInFahrenheit = null;
let weatherChart; // Store Chart.js instance for updating the graph

// Add event listener for the temperature toggle
tempToggle.addEventListener('change', () => {
  if (tempToggle.checked) {
    currentTemp.textContent = `Temperature: ${currentTemperatureInFahrenheit} °F`;
  } else {
    currentTemp.textContent = `Temperature: ${currentTemperatureInCelsius} °C`;
  }
});

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const url = `${baseUrl}?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '200') {
        const weather = data.list[0];
        cityName.textContent = data.city.name;
        weatherCondition.textContent = `Condition: ${weather.weather[0].description}`;
        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="Weather Icon">`;

        // Store temperatures
        currentTemperatureInCelsius = weather.main.temp;
        currentTemperatureInFahrenheit = (weather.main.temp * 9/5) + 32;
        currentTemp.textContent = `Temperature: ${currentTemperatureInCelsius} °C`;

        humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
        pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;

        // Prepare data for the graph
        const labels = [];
        const temps = [];

        data.list.forEach(item => {
          labels.push(item.dt_txt);
          temps.push(item.main.temp);
        });

        updateChart(labels, temps);
      } else {
        alert(`Error: ${data.message}`);
      }
    })
    .catch(error => console.error('Error fetching weather data:', error));
});

// Function to update the graph
function updateChart(labels, temps) {
  if (weatherChart) {
    weatherChart.data.labels = labels;
    weatherChart.data.datasets[0].data = temps;
    weatherChart.update();
  } else {
    const ctx = document.getElementById('weatherChart').getContext('2d');
    weatherChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature (°C)',
          data: temps,
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time',
            }
          },
          y: {
            title: {
              display: true,
              text: 'Temperature (°C)',
            },
            beginAtZero: false,
            ticks: {
              callback: function(value) {
                return `${value}°C`;
              }
            }
          }
        }
      }
    });
  }
}
