// src/utils/ContactsAPI.js

import request from 'superagent';

export default {

  // We want to get a list of all the sources
  // from the API. 
  getSources: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, response) => {
          if (err) reject(err);
          resolve(response.body.sources);
        })
    });
  },

  getArticles: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, response) => {
          if (err) reject(err);
          resolve(response.body.articles);
        })
    });
  }
}