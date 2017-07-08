
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

}
const articleStore = new ArticleStore();

export default articleStore;
