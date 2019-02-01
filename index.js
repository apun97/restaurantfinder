'use-strict';
require('dotenv').config();
const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 5000;
const yelp = require('yelp-fusion');

const YELP_QUERY_URL = 'https://api.yelp.com/v3';
const YELP_BUSINESSES = '/businesses';
const YELP_SEARCH = '/search';


app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/maps_api_key', (req, res) =>{
  const apikey = process.env.GOOGLE_MAPS_API_KEY;
  res.send({ key: `${apikey}` });
});

//Yelp API request
app.get('/yelp_request', (req, res) => {
  const price = req.query.price;
  const distance = req.query.distance;
  const categories = req.query.categories;
  const origin = req.query.origin;
  const apiKey = process.env.YELP_API_KEY;
  const client = yelp.client(apiKey);

  client.search({
    term: 'restaurants',
    location: origin,
    price: price,
    distance: distance,
    categories: categories,
    limit: 10
  })
  .then(response => {
    return response.jsonBody;
  })
  .then(json => {
    return json.businesses;
  })
  .then((businesses)=>
  {res.send({ businesses });
  })
  .catch(error => console.log(error));
});