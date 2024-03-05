import Image from "next/image";
import React from "react";
import { FaWind, FaDroplet } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaTemperatureLow } from "react-icons/fa";

const Weather = ({ data }) => {
  //console.log(data);
  return (
    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500  rounded-[40px] ml-2 mr-2 mb-20 h-96">
      <div className="flex flex-col items-center">
        <div className="flex">
          <CiLocationOn size={22} />
          <p className="font-bold">{data.name}</p>
        </div>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt="/"
          width="100"
          height="100"
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <p className="font-bold text-8xl">
          {data.main.temp.toFixed(0)}
          &#176;
        </p>
        <p className="font-bold text-2xl flex-col">{data.weather[0].main}</p>
      </div>
      <div className="flex items-center p-auto border-t-2 pt-4 ">
        <div className="ml-auto mr-auto">
          <div className="mb-2">
            <FaTemperatureLow size={26} />
          </div>
          <p>It Feels Like</p>
          <p>{data.main.feels_like.toFixed(0)}&#176;</p>
        </div>
        <div className="ml-auto mr-auto">
          <div className="mb-2">
            <FaDroplet size={26} />
          </div>
          <p>Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="ml-auto mr-auto">
          <div className="mb-2">
            <FaWind size={26} />
          </div>
          <p>Wind speed</p>
          <p>{data.wind.speed.toFixed(0)} MPH</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
