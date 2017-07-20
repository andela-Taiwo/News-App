
import BaseStore from './BaseStore';

class ArticleStore extends BaseStore {
  constructor() {
    super();
    this.articles = [];
    this.subscribe(() => this.handler.bind(this));
  }
  /**
  * Register callback to handle all updates
  *
  * @param  {Object} action
   */
  handler(action) {
    if (action.actionType === 'GET_ARTICLES') {
      this.articles = action.articles;
      this.emitChange();
    } else if (action.actionType === 'GET_ARTICLES_ERROR') {
      this.setError(action.message);
      this.emitChange();
    }
  }
  /**
   * @returns{array} Get the articles for the calling components
   * @memberof ArticleStore
   */
  getArticles() {
    return this.articles;
  }

 /**
  * @returns {null}
  * @memberof ArticleStore
  */
  setArticles() {
    return null;
  }

    /**
   * Set error message
   * @param {string} message: error message
   * @memberof ArticleStore
   * @return {void}
   */
  setError(message) {
    this.errorMessage = message;
  }

  /**
   * Get error message
   * @returns {string} message
   * @memberof ArticleStore
   */
  getError() {
    return this.errorMessage;
  }

}
const articleStore = new ArticleStore();

export default articleStore;
