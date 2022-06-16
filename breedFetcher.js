const request = require("request");

const breedFetcher = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    if (err) {
      console.error(err);
      return;
    }
    if (body.length === 2) {
      console.log(`The breed ${breed} was not found.`);
      return;
    }
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  });
};

const breed = process.argv;
breed.splice(0, 2);

breedFetcher(breed);
