import Dispatcher from '../dispatch/Dispatcher';
import NewsAPI from '../utils/NewsAPI';

/**
 *  passing an sources returned from API call to the dispatcher
 *  
 */
export function getSources() {
  const url = 'https://newsapi.org/v1/sources?language=en';
  return NewsAPI.getSources(url)
    .then((sources) => {
      Dispatcher.dispatch({
        actionType: 'GET_SOURCES',
        sources
      });
    });
}

export function getArticles(srcId, sortQuery) {
  const url = 'https://newsapi.org/v1/articles?source=' + srcId +
  '&sortBy=' + sortQuery + '&apiKey=' + process.env.API_KEY;
  return NewsAPI.getArticles(url)
    .then((articles) => {
      Dispatcher.dispatch({
        actionType: 'GET_ARTICLES',
        articles
      });
    });
}

export function setSources() {
  const url = 'https://newsapi.org/v1/sources?language=en';
  return NewsAPI.setSources(url)
    .then(() => {
      Dispatcher.dispatch({
        actionType: 'REMOVE_SOURCES',
        sources: null
      });
    });
}
