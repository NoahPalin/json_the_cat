const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    if (err) {
      return callback(err, null);
    } 
    const data = JSON.parse(body);
    const breedInfo = data[0];
    if (breedInfo) {
      callback(null, breedInfo.description);
    } else {
      callback("The breed was not found");
    }
  });
};

module.exports = { fetchBreedDescription };
