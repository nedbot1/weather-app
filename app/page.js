"use client";

import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import CurrentWeather from "./component/currentWeather";
import WeatherForecast from "./component/weatherForeCast";
import Loader from "./component/loder";
import Snake from "./component/snake";
import Apod from "./component/Apod";

export default function Home() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
        //console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  };

  const fetchCurrentWeather = () => {
    if (!city) {
      //setErrorMessage("Please enter a city");
      return;
    }

    setLoading(true);
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    fetchWeatherData(currentWeatherUrl, setCurrentWeather);
  };

  const fetchForecastWeather = () => {
    setLoading(true);
    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}&cnt=7`;
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
    <div className="bg-image bg-cover min-h-screen items-center justify-between">
      <div className=" flex justify-between items-center max-w-[500px] w-full md:m-auto pt-4 text-white z-10 mb-4 px-1 ">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent/30 border border-gray-300 text-white rounded-2xl"
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
        <Loader />
      ) : (
        <>
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
          {Object.keys(currentWeather).length > 0 &&
            Object.keys(forecastWeather).length > 0 && <Apod />}
        </>
      )}
    </div>
  );
}
