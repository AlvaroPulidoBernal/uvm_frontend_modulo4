const axios = require('axios');

const params = {
  access_key: '55f45996a84706946ffe7f4204db6f9a',
  query: 'New York'
}

axios.get('https://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });