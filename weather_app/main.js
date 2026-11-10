import { getCoordinates, getWeather } from "./services/weatherService.js";
import { renderCurrentWeather, renderForecast, renderRecentCities } from "./components/weatherPage.js";
import { filterForecast } from "./utils/helpers.js";
import { MAX_RECENT_CITIES } from "./constants/config.js";

const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const loader = document.getElementById("loader");
const errorMessage = document.getElementById("errorMessage");
const currentWeatherContainer =document.getElementById("currentWeather");
const forecastSection =document.getElementById("forecastSection");
const forecastContainer = document.getElementById("forecastContainer");
const forecastFilter = document.getElementById("forecastFilter");
const recentCitiesContainer = document.getElementById("recentCities");

let currentForecast = [];
let recentCities = [];
let currentController = null;

function showLoading() {
    loader.classList.remove("hidden");
    errorMessage.classList.add("hidden");
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
    forecastSection.classList.add("hidden");
    currentWeatherContainer.replaceChildren();
}

function updateForecast() {

    const filterType = forecastFilter.value;
    const filteredData = filterForecast(
        currentForecast,
        filterType
    );
    renderForecast(
        filteredData,
        forecastContainer
    );
}

function updateRecentCities(city) {
    recentCities = recentCities.filter(item => {
        return item.name.toLowerCase() !== city.name.toLowerCase() 
    });

    recentCities.unshift(city);
    recentCities = recentCities.slice(0, MAX_RECENT_CITIES);
    renderRecentCities(
        recentCities,
        recentCitiesContainer,
        loadWeather
    );
}

async function loadWeather(cityName) {
    const city = cityName.trim();
    if (!city) {
        showError("Please enter a city name.");
        return;
    }

    if (currentController) {
        currentController.abort();
    }
    currentController = new AbortController();
    const signal = currentController.signal;
    showLoading();

    try {
        const cityData = await getCoordinates(
            city,
            signal
        );

        const weatherData = await getWeather(
            cityData.latitude,
            cityData.longitude,
            signal
        );

        renderCurrentWeather(
            cityData,
            weatherData,
            currentWeatherContainer
        );

        currentForecast = weatherData.daily.time.map(
            (date, index) => {
                return {
                    date: date,
                    weatherCode: weatherData.daily.weather_code[index],
                    maxTemperature: weatherData.daily.temperature_2m_max[index],
                    minTemperature: weatherData.daily.temperature_2m_min[index],
                    precipitationProbability: weatherData.daily.precipitation_probability_max[index]
                };
            }
        );

        forecastSection.classList.remove("hidden");
        updateForecast();
        updateRecentCities(cityData);
        errorMessage.classList.add("hidden");
    } catch (error) {
        if (error.name === "AbortError") {
            return;
        }
        showError(error.message);
    } finally {
        if (currentController?.signal === signal) {
            loader.classList.add("hidden");
            currentController = null;
        }
    }
}

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    loadWeather(cityInput.value);
});

forecastFilter.addEventListener("change", updateForecast);

loadWeather("Abu Dhabi");