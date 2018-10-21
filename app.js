const request = require("request");

const apiKey = "AIzaSyCT_Y6J6Tm3HtP7oMBDipYVvwwV_vJ12bQ";
const apiAddress = "33020";

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${apiAddress}&key=${apiKey}`,
    json: true
  },
  (err, resp, body) => {
    console.log(body);
  }
);
