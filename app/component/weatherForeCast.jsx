import React from "react";

const WeatherForecast = ({ data }) => {
  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] m-auto text-gray-300 overflow-y-scroll h-96">
      {data.list.map((forecastItem, index) => (
        <div key={index} className="mb-4 border rounded-[40px] p-10 flex">
          <div className="m-auto ">
            <p className=""> {forecastItem.dt_txt}</p>
          </div>
          <div className="m-auto">
            <p>Temperature: {forecastItem.main.temp.toFixed(0)}°C</p>
          </div>
          <div className="m-auto">
            <p>Description: {forecastItem.weather[0].description}</p>
          </div>
          <div className="m-auto">
            <img
              src={getWeatherIconUrl(forecastItem.weather[0].icon)}
              alt={forecastItem.weather[0].description}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
