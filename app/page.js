"use client";
import { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Weather from "@/component/weather";
import Spinner from "@/component/spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);

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
      <div>
        <div className="absolute top-0 left-0 bottom-0 bg-black/90 z-[1]" />
        <Image
          src="https://w0.peakpx.com/wallpaper/165/140/HD-wallpaper-canyon-wet-stunning-sun-sunset-magic-clouds-beach-evening-morning-wicked-super-desert-black-sky-set-weather-coloured-mountains-deep-dry-violet-rain-canyon-satuation-sand-stone.jpg"
          layout="fill"
          objectFit="cover"
          alt="Nature"
          className="object-cover"
        ></Image>
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
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
        <div>{weather.main ? <Weather data={weather} /> : null}</div>
      </div>
    );
  }
}
