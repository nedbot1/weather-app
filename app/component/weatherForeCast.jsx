import React from "react";
import { IoMdTime } from "react-icons/io";

const WeatherForecast = ({ data }) => {
  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div>
      <div className="flex ml-10 mb-5">
        <IoMdTime size={22} />
        <p>Three hourly forecast for the day</p>
      </div>
      <div className=" flex  text-gray-300 overflow-x-scroll mr-4 ml-4 rounded-[40px]">
        {data.list.map((forecastItem, index) => (
          <div
            key={index}
            className="mb-1 border rounded-[40px] p-4 mr-2 bg-transparent/25"
          >
            <div className="m-auto">
              <p> {forecastItem.main.temp.toFixed(0)}°C</p>
            </div>
            <div className="m-auto h-20">
              <img
                src={getWeatherIconUrl(forecastItem.weather[0].icon)}
                alt={forecastItem.weather[0].description}
              />
            </div>

            <div className="m-auto ">
              <p className=""> {forecastItem.dt_txt}</p>
            </div>

            {/* <div className="m-auto">
            <p>{forecastItem.weather[0].description}</p>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
