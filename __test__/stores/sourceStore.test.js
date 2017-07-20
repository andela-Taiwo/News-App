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
  describe('Source Store', () => {
    it('should return an empty array before action is dispatched', () => {
      expect(SourceStore.getSources()).toEqual([]);
    });

    it('#getSources Should return an array of sources ', () => {
      dispatchMock({ actionType: 'GET_SOURCES', sources });
      expect(SourceStore.getSources()).toEqual(sources);
    });

    it('#setSources Should return an  empty array ', () => {
      SourceStore.setSources();
      expect(SourceStore.setSources()).toEqual(null);
    });
  });
});
