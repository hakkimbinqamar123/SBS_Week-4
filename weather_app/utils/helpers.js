export function formatTemperature(temp) {
  return `${temp.toFixed(1)}°C`;
}

export function getWeatherCode(code) {
  const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
  };
  return weatherCodes[code] || "Unknown weather condition";
}

export function filterForecast(forecast, type) {
  if (type === "all") {
    return forecast;
  }

  if (type === "rainy") {
    return forecast.filter((day) => {
      return day.precipitation >= 40;
    });
  }

  if (type === "clear") {
    return forecast.filter(day => {
        return [0, 1, 2].includes(day.weatherCode)
    }) 
  }
}
