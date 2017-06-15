import { EventEmitter } from 'events';
import Dispatcher from '../dispatch/Dispatcher';

const CHANGE_EVENT = 'change';
class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  getArticles() {
    return this.articles;
  }
  setArticles(){
    return null;
  }

handleActions(action) {
    switch(action.actionType) {
      case "GET_ARTICLES":
        this.articles = action.articles;
    
        // We need to call emitChange so the event listener
        // knows that a change has been made
        this.emit(CHANGE_EVENT);
        break;

      // case "GET_ARTCLES":
      //   this.articles = action.articles
      //   this.emit(CHANGE_EVENT);
      //   break;
        
      case "REMOVE_ARTICLES":
        this.setArticles();
        this.emit(CHANGE_EVENT);
        break;

      default:
    }
  }

}
const articleStore = new ArticleStore();
Dispatcher.register(articleStore.handleActions.bind(articleStore));

export default articleStore;