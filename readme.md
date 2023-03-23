### Lord of the Rings Project

This is a Lord of the Ring Project.

The focus is to build an SDk that consumes an API, making it easy for developers to use API just by download SDK and the API's covered are:
```
/movie
/movie/{id}
/movie/{id}/quote
```
### Install
npm i liblab-js-sdk

### Usage
```
const {MoviesSDK} = require('liblab-js-sdk');


const baseUrl ='https://b270-69-18-20-69.ngrok.io'

const apiKey = "6tcw4pjbTd7mmXUGhiSl";

const movieSDK = new MoviesSDK(baseUrl, apiKey);


movieSDK.getMovies().then((movies) => {
        console.log(movies);
        // Perform whatever operation with the data

      })
      .catch((error) => {
        console.error(error);
        // send error response to user
      });


const id ="5cd95395de30eff6ebccde5d"; 

movieSDK.getMovieById(id).then((movies) => {
        console.log(movies);
        // Perform whatever operation with the data
      })
      .catch((error) => {
        console.error(error);
        // send error response to user
      });
    
movieSDK.getAMovieQuote(id).then((movies) => {
        console.log(movies);
         // Perform whatever operation with the data
      })
      .catch((error) => {
        console.error(error);
        // send error response to user
      });

```
    
   

### Test
npm run test


