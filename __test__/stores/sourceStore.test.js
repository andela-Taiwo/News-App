import SourceStore from '../../src/js/stores/SourceStore';
import dispatcher from '../../src/js/dispatch/Dispatcher';

jest.mock('../../src/js/dispatch/Dispatcher');
jest.dontMock('../../src/js/stores/SourceStore');

describe('ArticleAction', () => {
  let sources;
  let dispatchMock;
  beforeEach(() => {
    dispatchMock = dispatcher.register.mock.calls[0][0];
    sources = [
      { id: 'bbc-news', name: 'BBC News' },
      { id: 'abc-news', name: 'ABC News' }
    ];
  });
  afterEach(() => {
    SourceStore.handler({ type: 'GET_SOURCES', sources: [] });
  });
  describe('SourceStore', () => {
    it('returns an empty array before action is dispatched', () => {
      expect(SourceStore.getSources()).toEqual([]);
    });

    it('List Sources out', () => {
      dispatchMock({ actionType: 'GET_SOURCES', sources });
      expect(SourceStore.getSources()).toEqual(sources);
    });

    it('set sources to null when setSources is called', () => {
      SourceStore.setSources();
      expect(SourceStore.setSources()).toEqual(null);
    });
  });
});
