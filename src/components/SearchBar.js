import React from "react";

const SearchBar = ({ city, setCity, fetchWeather }) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            fetchWeather();
        }
    };

    return (
        <div className="input-group">
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={fetchWeather}>Search</button>
        </div>
    );
};

export default SearchBar;
