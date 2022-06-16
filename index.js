const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv;
breed.splice(0, 2);

fetchBreedDescription(breed, (err, body) => {
  if (err) {
    console.log(`Error fetch details: ${err}`);
  } else {
    console.log(body);
  }
});

