import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

const App = () => {
    const [city, setCity] = useState("Toronto");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        const API_KEY = "c1bd031478ac6db9e4dc011f03944eec"; 
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
        try {
            const weatherResponse = await axios.get(URL);
            const forecastResponse = await axios.get(FORECAST_URL);
            setWeather(weatherResponse.data);
            setForecast(forecastResponse.data.list.slice(0, 5));
            setError("");
        } catch (err) {
            setError("City not found. Please enter a valid city name.");
            setWeather(null);
            setForecast([]);
        }
    };

    useEffect(() => {
        fetchWeather(); 
    }, []);

    return (
        <div className="container">
            <h1 className="title">Weather App</h1>
            <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
            {error && <p className="text-danger text-center">{error}</p>}
            {weather && forecast.length > 0 && (
                <WeatherCard weather={weather} forecast={forecast} />
            )}
        </div>
    );
};

export default App;
