import { formatTemperature, getWeatherCode, filterForecast } from "../utils/helpers.js"

export function renderCurrentWeather (city, weather, container) {
    const current = weather.current
    container.replaceChildren()

    const card = document.createElement("div")
    card.className = "weather-card"

    card.innerHTML = `
      <h2></h2>
      <p class="weather-description"></p>
      <h1 class="temperature"></h1>
        <div class="weather-details">
            <p>Feels Like: <span></span></p>
            <p>Humidity: <span></span></p>
            <p>Wind Speed: <span></span></p>
        </div>
    `

    card.querySelector("h2").textContent = `${city.name}, ${city.country}`
    card.querySelector(".weather-description").textContent = getWeatherCode(current.weather_code)
    card.querySelector(".temperature").textContent = formatTemperature(current.temperature_2m)
    const detailValues = card.querySelectorAll(".weather-details span")
    detailValues[0].textContent =  formatTemperature(current.apparent_temperature)
    detailValues[1].textContent = `${current.relative_humidity_2m}%`
    detailValues[2].textContent = `${current.wind_speed_10m} km/h`

    container.appendChild(card)
}

export function renderForecast(forecast, container) {
    container.replaceChildren()

    if(forecast.length === 0) {
        container.textContent = "No days match this filter."
        return
    }

    forecast.forEach(day => {

        const card = document.createElement("div")

        card.className = "forecast-card"

        const date = new Date(
            `${day.date}T12:00:00`
        )

        const dayName = date.toLocaleDateString("en-US", { weekday: "short" })

        const heading = document.createElement("h3")

        heading.textContent = dayName

        const condition = document.createElement("p")
        condition.textContent = getWeatherCode(day.weatherCode)
        const temperature = document.createElement("p")
        temperature.textContent = `${Math.round(day.maxTemperature)}° / ${Math.round(day.minTemperature)}°`

        const rain = document.createElement("p")
        rain.textContent = `Rain: ${day.precipitationProbability}%`

        card.append(heading,condition,temperature,rain)
        container.appendChild(card)
    })
}

export function renderRecentCities(cities, container, onSelect) {

    container.replaceChildren();

    cities.forEach(city => {
        const button = document.createElement("button")
        button.className = "recent-city"
        button.textContent = city.name
        button.addEventListener("click", () => {
            onSelect(city.name)
        })
        container.appendChild(button)
    })
}