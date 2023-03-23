const { assert } = require('chai');
const {MoviesSDK} = require('../index');


const baseUrl =process.env.BASE_URL;;
const apiKey = process.env.API_KEY;

const movieSDK = new MoviesSDK(baseUrl, apiKey);


const id ="5cd95395de30eff6ebccde5d"; 
const movie ={"_id":"5cd95395de30eff6ebccde5d","name":"The Return of the King","runtimeInMinutes":201,"budgetInMillions":94,"boxOfficeRevenueInMillions":1120,"academyAwardNominations":11,"academyAwardWins":11,"rottenTomatoesScore":95};

describe('Test the sdk  method', () => {
it('Should get all movies', async() => {
movieSDK.getMovies().then((movies) => {
        
        assert(movies.length > 0, "Length of movies is greater than zero");
        assert(movies.length == 8, "Length of movies is 8");
        
      })
      .catch((error) => {
        console.error(error);
      });
    })
it('Should get 5 movies', async() => {
movieSDK.getMovies(5).then((movies) => {
        
        assert(movies.length > 0, "Length of movies is greater than zero");
        assert(movies.length == 5, "Length of movies is 5");
        
      })
      .catch((error) => {
        console.error(error);
      });
    })
    
    it('Should get a movie', async() => {
movieSDK.getMovieById(id).then((movies) => {
        
        assert.strictEqual(movies.id, movie.id, "Id is same");
        assert.strictEqual(movies.name,movie.name, "Name is same");
        
      })
      .catch((error) => {
        console.error(error);
      });
    });

    it('Should get 15 quotes in a movie', async() => {
movieSDK.getAMovieQuote(id,15).then((movies) => {
        
        assert(movies.docs.length > 0, "Length of movie quote is greater than zero");
        assert.strictEqual(movies.limit,15, "limit is 15");
       
      })
      .catch((error) => {
        console.error(error);
      });
    });
    it('Should get quotes in a movie (By default, the limit is 10)', async() => {
movieSDK.getAMovieQuote(id).then((movies) => {
        
        assert(movies.docs.length > 0, "Length of movie quote is greater than zero");
        assert.strictEqual(movies.limit,10, "limit is 10");
       
      })
      .catch((error) => {
        console.error(error);
      });
    });
    it('Should get 3rd page of quotes in a movie', async() => {
movieSDK.getAMovieQuote(id,10,3).then((movies) => {
        
        assert(movies.docs.length > 0, "Length of movie quote is greater than zero");
        assert.strictEqual(movies.limit,10, "limit is 10");
       
      })
      .catch((error) => {
        console.error(error);
      });
    });

    }) 

