import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative text-white">
      <div>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="/"
          width="100"
          height="100"
        />
        <p>{data.weather[0].main}</p>
      </div>
      <p>
        the temperature in {data.name} is {data.main.temp.toFixed(0)}
        &#176; celcius
      </p>
      <div>
        <div>
          <div>
            <p>Feels Like</p>
            <p>{data.main.feels_like.toFixed(0)}&#176;</p>
          </div>
          <div>
            <p>Humidity</p>
            <p>{data.main.humidity}%</p>
          </div>
          <div>
            <p>Wind speed</p>
            <p>{data.wind.speed.toFixed(0)} MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
