import { GEO_API, WEATHER_API, FORECAST_DAYS } from "../constants/config.js"

export async function getCoordinates (city) {
    const url = new URL(GEO_API)
    url.search = new URLSearchParams({
        name: city,
        count: 1,
        format: "json"
    })

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Failed to fetch coordinates")
    }
    const data = await response.json()

    if (!data.results || data.results.length === 0) {
        throw new Error("No coordinates found for the specified city")
    }

    return data.results[0]
 }

 export async function getWeather(latitude, longitude) {
    const url = new URL(WEATHER_API)
    url.search = new URLSearchParams({
        latitude: latitude,
        longitude: longitude,
        current: [
            "temperature_2m",
            "relative_humidity_2m",
            "apparent_temperature",
            "is_day",
            "precipitation",
            "weather_code",
            "wind_speed_10m"
        ].join(","),

        daily: [
            "weather_code",
            "temperature_2m_max",
            "temperature_2m_min",
            "precipitation_probability_max"
        ].join(","),

        timezone: "auto",

        forecast_days: String(FORECAST_DAYS)
    })

    const res = await fetch(url)

    if(!res.ok) {
        throw new Error("Failed to fetch weather data")
    }

    const data = await res.json()
    if (!data.current || !data.daily) {

        throw new Error("Weather data is incomplete")

    }

    return data
 }