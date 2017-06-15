
import ArticleStore from '../../src/js/stores/ArticleStore';
import Dispatcher from '../../src/js/dispatch/Dispatcher';
import * as ArticleAction from '../../src/js/actions/ArticleAction';

describe('ArticleAction', () => {
  describe('ArticleStore', () => {
    it('initilizes', () => {
      expect(typeof ArticleStore.getArticles('bbc')).equal("object");
    });

    it('List articles out', () => {
      Dispatcher.dispatch({
        type: 'GET_ARTICLES',
        query: 'abc',
      });
      expect(typeof ArticleStore.getArticles()).toBe("object");
    });

      it('Remove artcles', () => {
      Dispatcher.dispatch({
        type: 'REMOVE_ARTICLES',
        query: 'abc',
      });
      expect(ArticleStore.setArticles()).toBe(null);
    });
  });
});