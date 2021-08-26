const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, function(error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  console.log('description:', data[0].description);
});
