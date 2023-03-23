const axios = require('axios');


class MoviesSDK {
  constructor(apiUrl,apiKey) {
   
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async _apiCall(url) {
    return await axios.get(url, {
        headers: {
            Authorization: `Bearer ${this.apiKey}`,
        },
    });
}
  async getMovies(limit=10,page=0,offset=0) {
    const url= `${this.apiUrl}/movie?limit=${limit}&page=${page}&offset=${offset}`;

    try {
        const movies = await this._apiCall(url);
        return movies.data.docs;
      } catch (err) {
        return err;
      }
  }

  async getMovieById(id) {
    const url = `${this.apiUrl}/movie/${id}`; 
    const response = await this._apiCall(url);

    return response.data.docs[0];
  }
  async getAMovieQuote(id, limit=10,page=0,offset=0) {
    const url = `${this.apiUrl}/movie/${id}/quote?limit=${limit}&page=${page}&offset=${offset}`;
    const response = await this._apiCall(url);

    return response.data;
  }



}

module.exports = 
{MoviesSDK,};
