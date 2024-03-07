"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import CurrentWeather from "./component/currentWeather";
import WeatherForecast from "./component/weatherForeCast";
import Spinner from "./component/spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch current weather when the component mounts
    fetchCurrentWeather();
  }, []);

  const fetchWeatherData = (url, setData) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  };

  const fetchCurrentWeather = () => {
    setLoading(true);
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    fetchWeatherData(currentWeatherUrl, setCurrentWeather);
  };

  const fetchForecastWeather = () => {
    setLoading(true);
    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}&cnt=7`;
    fetchWeatherData(forecastWeatherUrl, setForecastWeather);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchCurrentWeather();
    fetchForecastWeather();
    setCity("");
  };

  return (
    <div className="relative">
      <div className="absolute inset-0">
        {/* <Image
          src="https://c1.wallpaperflare.com/preview/47/398/567/nature-summer-weather-fluffy.jpg"
          layout="fill"
          objectFit="cover"
          alt="Nature"
          className="object-cover"
        /> */}
      </div>
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10 mb-4">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <input
            className="bg-transparent border-none text-white focus:outline-none text-2xl flex-grow mr-2"
            type="text"
            placeholder="Search city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">
            <BsSearch size={20} />
          </button>
        </form>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {Object.keys(currentWeather).length > 0 && (
            <div>
              <CurrentWeather data={currentWeather} />
            </div>
          )}
          {Object.keys(forecastWeather).length > 0 && (
            <div className="">
              <WeatherForecast data={forecastWeather} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
