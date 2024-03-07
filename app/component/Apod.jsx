import { useState, useEffect } from "react";
import Image from "next/image";

const apiKey = 'XOXrlgiy0CsN8RaH3PMZytPxexgJg1VNjsFFgBAb'
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;



export default function Apod() {
  const [pictureData, setPictureData] = useState(null)
  
  const fetchAstronomyPicture = () => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setPictureData(data)
      })
      .catch(error => {
        console.error('Error fetching APOD:', error);
      });
    
    }

    useEffect(() => {
      fetchAstronomyPicture();
    }, []);

    return (
      <div>
        {pictureData ? (
          <>
            <Image 
              src={pictureData.url}
              height={400}
              width={400}
            />
            <p className="mt-4">{pictureData.explanation}</p>
          </>
        ) : (null)}
      </div>
    )

  }

  