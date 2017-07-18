import Dispatcher from '../dispatch/Dispatcher';
import NewsAPI from '../utils/NewsAPI';

/**
 * @export {sources}
 * @returns {array}
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

/**
 * @export
 * @param {any} sourceId
 * @param {any} sortQuery
 * @returns {array}
 */
export function getArticles(sourceId, sortQuery) {
  const url = `https://newsapi.org/v1/articles?source=${sourceId}&sortBy=${sortQuery}&apiKey=${process.env.API_KEY}`;
  return NewsAPI.getArticles(url)
    .then((articles) => {
      Dispatcher.dispatch({
        actionType: 'GET_ARTICLES',
        articles
      });
    });
}

/**
 * @export {aricles}
 * @returns {null}
 */
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
