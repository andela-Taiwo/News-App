import { EventEmitter } from 'events';
import Dispatcher from '../dispatch/Dispatcher';

const CHANGE_EVENT = 'change';

/**
 * initialize the articles to an  empty array
 */
class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

 /**
    *  Get the articles for the calling components
    */
  getArticles() {
    return this.articles;
  }
   /**
    * Reset the articles array to null
    */
  setArticles() {
    return null;
  }

/**
 * @param {*} action GET_ARTICLES
 * listening to the dispather to get action look GET_ARTICLES action types */

 handleActions(action) {
    if (action.actionType === 'GET_ARTICLES') {
      this.articles = action.articles;
      /**
       *  We need to call emit('change') so that articles component
/        knows that a change has been made
       */
      this.emit(CHANGE_EVENT);
    }
  }

}
const articleStore = new ArticleStore();
Dispatcher.register(articleStore.handleActions.bind(articleStore));

export default articleStore;