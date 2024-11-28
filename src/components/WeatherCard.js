import React from "react";

const WeatherCard = ({ weather, forecast }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <div>
            {/* Current Weather and Details */}
            <div className="weather-details-container">
                {/* Current Weather Card */}
                <div className="weather-card">
                    <h3>{new Date().toLocaleDateString("en-US", { weekday: "long" })}</h3>
                    <p>{new Date().toLocaleDateString()}</p>
                    <p>
                        {weather.name} - {weather.sys.country}
                    </p>
                    <h1>{Math.round(weather.main.temp - 273.15)}°C</h1>
                    <img src={iconUrl} alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                </div>

                {/* Additional Details Card */}
                <div className="details-card">
                    <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
                    <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p>
                    <p><strong>Visibility:</strong> {weather.visibility / 1000} km</p>
                </div>
            </div>

            {/* 5-Day Forecast */}
            <div className="forecast-container">
                {forecast.map((day, index) => (
                    <div key={index} className="forecast-card">
                        <p>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                        />
                        <p>{Math.round(day.main.temp - 273.15)}°C</p>
                        <p>{day.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherCard;
