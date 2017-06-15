
import SourceStore from '../../src/js/stores/SOurceStore';
import Dispatcher from '../../src/js/dispatch/Dispatcher';
import * as ArticleAction from '../../src/js/actions/ArticleAction';

describe('ArticleAction', () => {
  describe('SourceStore', () => {
    it('initilizes', () => {
      expect(SourceStore.getSources('bbc')).equal(null);
    });

    it('List Sources out', () => {
      Dispatcher.dispatch({
        type: 'GET_SOURCES',
        query: 'abc',
      });
     
      expect(typeof SourceStore.getSources()).toBe("object");
    });

      it('Remove sources', () => {
      Dispatcher.dispatch({
        type: 'REMOVE_SOURCES',
        query: 'abc',
      });
      expect(SourceStore.setSources()).toBe(null);
    });
  });
});