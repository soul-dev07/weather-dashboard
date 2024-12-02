# Weather Dashboard

## Overview
The **Weather Dashboard** is a modern, interactive weather application that fetches weather data from the **OpenWeatherMap API**. It provides users with current weather information and a 5-day forecast for a given city or based on their IP address. Users can toggle between Celsius and Fahrenheit for temperature units.

The dashboard includes:
- **Weather conditions**: Temperature, humidity, wind speed, and pressure.
- **Graph**: A line chart that visualizes the temperature forecast over the next few days.
- **IP-based geolocation**: Fetches weather data based on the user's IP address if no city is provided.
- **Toggle feature**: Switch between Celsius and Fahrenheit for both the displayed temperature and the graph.

---

## Features

- **Current Weather Data**: Displays temperature, weather conditions, humidity, wind speed, and pressure.
- **5-Day Weather Forecast**: View a 5-day weather forecast with temperature readings at 3-hour intervals.
- **Temperature Toggle**: Switch between Celsius and Fahrenheit for the current temperature and graph.
- **Graph Visualization**: Line chart to show the temperature trends over the next few days.
- **IP Geolocation**: Automatically detects the user’s location and provides weather data based on their IP address.

---

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling and layout (with a dark theme).
- **JavaScript**: Fetching data, user interactions, and chart rendering.
- **Chart.js**: For rendering the temperature forecast graph.
- **OpenWeatherMap API**: Provides weather data.
- **ipinfo.io**: Used to detect the user's location based on their IP address.

---

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/weather-dashboard.git
    ```

2. Open the project folder:

    ```bash
    cd weather-dashboard
    ```

3. Open `index.html` in your browser to view the dashboard.

4. You will need a **valid API key** from **OpenWeatherMap** and **ipinfo.io** for weather data and geolocation functionality.
   - [Get OpenWeatherMap API Key](https://openweathermap.org/api)
   - [Get ipinfo.io API Key](https://ipinfo.io/signup)

5. Replace the `YOUR_API_KEY` and `YOUR_IPINFO_API_KEY` placeholders in the `script.js` file with your API keys.

---

## Usage

1. **Search by City**: Enter the name of a city in the search bar and click "Search" to fetch the weather data for that city.
2. **IP-based Weather**: If no city is entered, the app will automatically fetch weather data based on your IP address.
3. **Toggle Temperature Units**: Use the toggle button to switch between **Celsius (°C)** and **Fahrenheit (°F)** for both the displayed temperature and the chart.
4. **Forecast Graph**: The graph shows the temperature forecast for the next few days.

---

## Screenshots

![Weather Dashboard](./screenshots/dashboard.png)

---

## Contributing

Feel free to fork the repository and submit pull requests. You can contribute by:
- Adding new features.
- Reporting issues.
- Improving documentation.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **OpenWeatherMap**: For providing the weather API.
- **ipinfo.io**: For geolocation API used to detect user location.
- **Chart.js**: For providing a simple way to render graphs.
