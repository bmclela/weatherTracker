const express = require('express');
const app = express();
const https = require('https');

app.get('/', (req, res) => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=60ef1c767a56bb535edc4550cc47cd7d&units=imperial';
  https.get(url, response => {
    console.log(response.statusCode);

    response.on('data', data => {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const description = weatherData.weather[0].description;
      console.log(description);
    });
  });
  res.send('Server is up and running.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
