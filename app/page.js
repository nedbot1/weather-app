"use client";
import { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Weather from "@/app/component/weather";
import Spinner from "@/app/component/spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  //console.log(city);
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    // const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        //console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });

    setCity("");
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="bg-weather bg-cover">

        <div className="flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-medium m-auto p-3 bg-transparent border text-white rounded-2xl dark:md hover:bg-violet-300 "
          >
            <div>
              <input
                className="bg-transparent border-none text-white focus:outline-none text-2xl"
                type="text"
                placeholder="search city"
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {weather.main ? <Weather data={weather} /> : null}
      </div>
    );
  }
}
