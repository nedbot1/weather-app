import { useState, useEffect } from "react";
import Image from "next/image";

export default function Apod() {
  const [pictureData, setPictureData] = useState(null);

  useEffect(() => {
    const fetchAstronomyPicture = async () => {
      const currentDate = new Date().toISOString().split("T")[0];
      // const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${currentDate}`;

      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=XOXrlgiy0CsN8RaH3PMZytPxexgJg1VNjsFFgBAb&date=${currentDate}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPictureData(data);
      } catch (error) {
        console.error("Error fetching Astronomy Picture of the Day:", error);
      }
    };

    fetchAstronomyPicture();
  }, []);

  return (
    <div className="mx-auto bg-transparent">
      <div className="justify-center flex mt-4 font-bold ">
        <p className="border-b-2 text-2xl">Astronomy Pic of the Day</p>
      </div>
      {pictureData && (
        <div className="mt-4 justify-between items-center">
          <Image
            className="mx-auto rounded-lg"
            src={pictureData.url}
            alt="Astronomy Pic of the Day"
            height={400}
            width={400}
            onError={(e) => console.error("Error loading image:", e)}
          />
          <p className="px-5 py-2 bg-transparent/55 flex mt-4 items-center justify-center rounded-2xl mx-4 text-center">
            {pictureData.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
