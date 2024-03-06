import Image from "next/image";
import React from "react";
import { FaWind, FaDroplet } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaTemperatureLow } from "react-icons/fa";

const Weather = ({ data }) => {
  return (
    <div className="flex justify-center ">
      <div className="bg-transparent/25 border-2 rounded-[40px] mx-2 my-5 md:w-1/2 lg:w-1/3 xl:w-1/4 size-fit">
        <div className="flex flex-col items-center">
          <div className="flex mt-2">
            <CiLocationOn size={22} />
            <p className="font-bold text-xl">{data.name}</p>
          </div>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt="/"
            width="100"
            height="100"
          />
        </div>
        <div className="flex flex-col items-center my-4">
          <p className="font-bold text-4xl md:text-5xl lg:text-6xl text-blue-300">
            {data.main.temp.toFixed(0)}
            &#176;C
          </p>
          <p className="font-bold text-lg md:text-xl lg:text-2xl">
            {data.weather[0].main}
          </p>
        </div>
        <div className="flex items-center p-4 border-t-2">
          <div className="flex flex-col items-center mx-4">
            <div className="mb-2">
              <FaTemperatureLow size={26} />
            </div>
            <p className="text-sm md:text-base">It Feels Like</p>
            <p className=" text-2xl font-bold md:text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <div className="mb-2">
              <FaDroplet size={26} />
            </div>
            <p className="text-sm md:text-base">Humidity</p>
            <p className="text-2xl font-bold md:text-2xl">
              {data.main.humidity}%
            </p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <div className="mb-2">
              <FaWind size={26} />
            </div>
            <p className="text-sm md:text-base">Wind speed</p>
            <p className="text-2xl font-bold md:text-2xl">
              {data.wind.speed.toFixed(0)} MPH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
