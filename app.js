const request = require("request");
const yargs = require("yargs");

const utils = require("./utils");

const apiKey = "AIzaSyCT_Y6J6Tm3HtP7oMBDipYVvwwV_vJ12bQ";
const apiAddress = "33020";

const argv = yargs
.options({
  a: {
    demand: true,
    alias: "address",
    describe: "Address to fetch weather for",
    string: true
  }
})
.help()
.alias("help", "h")
.argv;

if (!utils.isEmpty(argv.a)) {

  const encodeAddress = encodeURIComponent(argv.a);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${apiKey}`,
      json: true
    },
    (err, resp, body) => {
      const results = body.results[0];
      const geometry = results.geometry;
      
      console.log(`Address: ${results.formatted_address}`);
      console.log(`Latitude: ${geometry.location.lat}`);
      console.log(`Longitude: ${geometry.location.lng}`);
    }
  );
} else {
  console.log(`Address entered invalid: ${argv.v}`);
}

/*
const apiKey = "AIzaSyCT_Y6J6Tm3HtP7oMBDipYVvwwV_vJ12bQ";
const apiAddress = "33020";

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${apiAddress}&key=${apiKey}`,
    json: true
  },
  (err, resp, body) => {
    const results = body.results[0];
    const geometry = results.geometry;
    
    console.log(`Address: ${results.formatted_address}`);
    console.log(`Latitude: ${geometry.location.lat}`);
    console.log(`Longitude: ${geometry.location.lng}`);
  }
);
*/