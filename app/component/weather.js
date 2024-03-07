const apiKey = 'XOXrlgiy0CsN8RaH3PMZytPxexgJg1VNjsFFgBAb';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_WEATHER_API_KEY}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const apodImageUrl = data.url;
    const apodTitle = data.title;
    const apodExplanation = data.explanation;
    
    // Display the APOD image
    const apodImageElement = document.getElementById('apod-image');
    apodImageElement.src = apodImageUrl;
    apodImageElement.alt = apodTitle;

    // Display additional information about the APOD image
    document.getElementById('apod-title').textContent = apodTitle;
    document.getElementById('apod-explanation').textContent = apodExplanation;
  })
  .catch(error => {
    console.error('Error fetching APOD:', error);
  });
