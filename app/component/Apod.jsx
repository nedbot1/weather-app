import { useState, useEffect } from "react";
import Image from "next/image";
//const apiKey = process.env.API_KEY;
const apiUrl =
  "https://api.nasa.gov/planetary/apod?api_key=XOXrlgiy0CsN8RaH3PMZytPxexgJg1VNjsFFgBAb";

export default function Apod() {
  const [pictureData, setPictureData] = useState(null);
  const fetchAstronomyPicture = () => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setPictureData(data);
      })
      .catch((error) => {
        //console.error("Error fetching APOD:", error);
      });
  };
  useEffect(() => {
    fetchAstronomyPicture();
  }, []);
  return (
    <div className=" mx-auto bg-transparent">
      <div className=" justify-center flex mt-4 font-bold ">
        <p className="border-b-2 text-2xl">Astronomy Pic of the Day</p>
      </div>
      {pictureData ? (
        <div className="mt-4 justify-between items-center">
          <Image
            className="mx-auto rounded-lg"
            src={pictureData.url}
            alt="/image"
            height={400}
            width={400}
          />
          <p className=" px-5 py-2 bg-transparent/55 flex mt-4 items-center justify-center rounded-2xl mx-4 text-center">
            {pictureData.explanation}
          </p>
        </div>
      ) : null}
    </div>
  );
}
