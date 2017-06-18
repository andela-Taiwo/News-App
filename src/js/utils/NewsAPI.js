// // src/utils/ContactsAPI.js

// import request from 'superagent';

// export default {

//   // We want to get a list of all the sources
//   // from the API. 
//   getSources: () => {
//     const url = 'https://newsapi.org/v1/sources?language=en';
//     return new Promise((resolve, reject) => {
//       request
//         .get(url)
//         .end((err, response) => {
//           if (err) reject(err);
//           resolve(response.body.sources);
//         })
//     });
//   },

//   getArticles: (url) => {
//     return new Promise((resolve, reject) => {
//       request
//         .get(url)
//         .end((err, response) => {
//           if (err) reject(err);
//           resolve(response.body.articles);
//         })
//     });
//   }
// }


import axios from 'axios';

export default {
  getSources: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve((res.data.sources));
      })
      // .catch((error) => {
      //   if (error) reject(error);
      // });
    });
  },

 getArticles(url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve(res.data.articles);
      })
      // .catch((error) => {
      //   reject(error.response);
      // });
    });
  },

   setSources(url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then((res) => {
        resolve(res.data.articles);
      })
      // .catch((error) => {
      //   reject(error.response);
      // });
    });
  },
};